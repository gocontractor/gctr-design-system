import { Component, OnInit, AfterViewInit, Input, EventEmitter, Output, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DataTableSettings } from '../models/data-column-settings';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatCheckbox, PageEvent, MatCheckboxChange } from '@angular/material';
import { DataColumnMode } from '../models/data-column-mode';
import { DataColumnDefinition } from '../models/data-column-definition';

// see here https://stackblitz.com/edit/angular-material-table-responsive?file=app%2Fapp.component.html

/**
 * If you want to use a checkbox column on the left hand side and a selection model,
 * then pass in the 'checkbox' string as the first element of the displayedColumns array:
 * `displayedColumns = ['checkbox', ...rest]`
 * You should also provide a selectionModel in this case
 * ---------------------------------
 */
@Component({
  selector: 'gctr-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class GctrDataTableComponent<T> implements OnInit, AfterViewInit {
  public clickedItem: T;
  // Basic Properties
  @Input() dataTableSettings: DataTableSettings<T>;
  // SelectionModel for use with checkboxes
  _selectionModelValue: SelectionModel<T>;
  @Input()
  get selectionModel(): SelectionModel<T> {
    return this._selectionModelValue;
  }
  @Output() selectionModelChange = new EventEmitter();
  set selectionModel(val: SelectionModel<T>) {
    this._selectionModelValue = val;
    this.selectionModelChange.emit(this._selectionModelValue);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren(MatCheckbox) checkboxes: QueryList<MatCheckbox>;
  private _itemsShown: T[];
  constructor() { }
  ngAfterViewInit() {
    this.dataTableSettings.dataSource.paginator = this.paginator;
    this.dataTableSettings.dataSource.sort = this.sort;
    this._itemsShown = this.dataTableSettings.dataSource.data.slice(0, this.paginator.pageSize);
    this.dataTableSettings.dataSource.paginator.page.subscribe((pageEvent: PageEvent) => {
      const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
      const endIndex = startIndex + pageEvent.pageSize;
      this._itemsShown = this.dataTableSettings.dataSource.filteredData.slice(startIndex, endIndex);
    });
  }
  ngOnInit() {
    // Warn for proper usage of checkboxes and selection model
    if (this.dataTableSettings.displayedColumns.some(e => e === 'checkbox') && !this.selectionModel) {
      console.warn('\
      It is recommended to provide a selection model in checkbox mode\n\
      for example: `this.selectionModel = new SelectionModel(true);`\n\
      `[(selectionModel)]="selectionModel"`'
      );
      this.selectionModel = new SelectionModel(true);
    }
    // Warn for proper usage of menus
    if (this.dataTableSettings.displayedColumns.some(e => e === 'menu') && !this.dataTableSettings.menu) {
      console.warn('You must provide a menu item array for the menu column');
    }
    // Warn for proper use of form field elements
    if ((this.dataTableSettings.columnDefinitions.some(e => {
      return (e.mode === DataColumnMode.checkbox || e.mode === DataColumnMode.input) && !e.disableFormField;
    }))) {
      console.warn('Using form field elements, you should supply a disabling method, e.g. `disableFormField: (row) => false`');
    }
    if (this.dataTableSettings.columnDefinitions.some(e => {
      return e.mode === DataColumnMode.checkbox && !e.checkboxSettings;
    })) {
      console.warn('supply checkbox settings with checkbox column');
    }
    if (this.dataTableSettings.columnDefinitions.some(e => {
      return e.mode === DataColumnMode.input && !e.inputSettings;
    })) {
      console.warn('supply input settings with input column');
    }
  }
  // The following Block is for Checkboxes Behavior
  public checkboxChange(event: MatCheckboxChange, row: T): void {
    const { source, checked } = event;
    if (checked) {
      this.selectionModel.select(row);
    } else {
      this.selectionModel.deselect(row);
    }
  }
  public get isAllSelected(): boolean {
    return this.selectionModel.selected.length === Math.min(this.dataTableSettings.dataSource.data.length, this.paginator.pageSize);
  }
  public get areSomeSelected(): boolean {
    return this.selectionModel.selected.length > 0 && !this.isAllSelected;
  }
  public isItemSelected(row: T): boolean {
    return this.selectionModel.isSelected(row);
  }
  public masterCheckboxChange(event: MatCheckboxChange): void {
    const { source, checked } = event;
    if (this.isAllSelected) {
      this.selectionModel.clear();
    } else {
      this._itemsShown.forEach(e => {
        if (!this.selectionModel.isSelected(e)) {
          this.selectionModel.select(e);
        }
      });
    }
  }
  public trackByColumnName(column: DataColumnDefinition<T>, index: number): string {
    return column.columnName;
  }
  get smallcreen(): boolean {
    return window.innerWidth < 961;
  }
  public handleRowClick(event: Event, row: T): void {
    const target = <HTMLInputElement>event.target;
    const { classList } = target;
    if (
      classList.contains('mat-checkbox-inner-container')
      || classList.contains('row-action-button')
      || classList.contains('mat-button-wrapper')
    ) {
      return;
    }
    if (!this.dataTableSettings.clickableRows) {
      return;
    }
    this.dataTableSettings.handleRowClick ? this.dataTableSettings.handleRowClick(row) : this.selectionModel.toggle(row);
  }
  public handleCellClick(column: DataColumnDefinition<T>, row: T): void {
    if (column.handleCellClick && !(column.mode === DataColumnMode.checkbox)) {
      column.handleCellClick(row);
    }
  }
  getNestedValue(column: DataColumnDefinition<T>, row: T) {
    const properties = column.columnName.split('.');
    let cellContent: any;
    properties.forEach(element => {
      //  Getting the value from the last evaluated parent OR the row itself
      //  allowing nested properties to be correctly evaluated
      cellContent = (cellContent || row)[element];
    });
    return cellContent;
  }
  isRowSelected(row: T): boolean {
    return this.selectionModel ? this.selectionModel.isSelected(row) : false;
  }
}
