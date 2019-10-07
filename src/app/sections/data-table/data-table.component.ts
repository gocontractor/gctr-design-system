import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatCheckboxChange } from '@angular/material';
import { DataColumnMode, DataTableMenuItem, DataTableSettings } from 'projects/gctr-design-system/src/public_api';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';

interface MockData {
  name: string;
  age: number;
  car: string;
  diet: {
    vegetarian: boolean;
  };
  mandatory: boolean;
  extraText: string;
}
const MOCK_DATA: MockData[] = [
  {
    name: 'michael',
    age: 19,
    car: 'opal',
    diet: {
      vegetarian: true
    },
    mandatory: true,
    extraText: ''
  },
  {
    name: 'sarah',
    age: 27,
    car: 'audi',
    diet: {
      vegetarian: false
    },
    mandatory: true,
    extraText: 'Woah, cool data-table!'
  },
  {
    name: 'george',
    age: 21,
    car: 'volkswagon',
    diet: {
      vegetarian: false
    },
    mandatory: false,
    extraText: ''
  },
  {
    name: 'michelle',
    age: 18,
    car: 'range rover',
    diet: {
      vegetarian: true
    },
    mandatory: false,
    extraText: 'Here is some additional text.'
  },
  {
    name: 'philip',
    age: 25,
    car: 'mercedes',
    diet: {
      vegetarian: true
    },
    mandatory: true,
    extraText: ''
  },
  {
    name: 'ruth',
    age: 28,
    car: 'nissan',
    diet: {
      vegetarian: true
    },
    mandatory: false,
    extraText: ''
  },
];

@Component({
  selector: 'app-section-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  // Documentation Properties
  public showBasicCode: boolean;
  public showAdvancedCode: boolean;
  public componentName = 'GctrDataTableComponent';
  public module = 'GctrDataTableModule';
  public classes = [
    'DataColumnDefinition',
    'DataColumnMode',
    'DataTableSettings',
    'DataColumnCheckboxSettings',
    'DataColumnInputSettings',
    'DataTableMenuItem'
  ];

  // Examples Properties
  public basicColumnsOptions = ['checkbox', 'name', 'diet.vegetarian', 'age', 'car', 'menu'];
  public basicColumns = new FormControl(['checkbox', 'name', 'diet.vegetarian', 'age', 'car', 'menu']);
  public exampleDataSource: MatTableDataSource<MockData> = new MatTableDataSource(MOCK_DATA);
  public exampleSelectionModel: SelectionModel<MockData> = new SelectionModel(true /*Multiple*/);
  public menu: DataTableMenuItem<MockData>[] = [
    {
      icon: 'visibility',
      label: 'View',
      disabled: (row: MockData) => false,
      action: (row: MockData) => alert(row.name)
    }
  ];
  public get basicExampleDataTableSettings(): DataTableSettings<MockData> {
    return ({
      displayedColumns: this.basicColumns.value,
      columnDefinitions: [
        {
          title: 'Name',
          columnName: 'name'
        },
        {
          title: 'Age',
          columnName: 'age'
        },
        {
          title: 'Car',
          columnName: 'car'
        },
        {
          title: 'Veggie',
          columnName: 'diet.vegetarian',
          mode: DataColumnMode.nested
        }
      ],
      dataSource: this.exampleDataSource,
      menu: this.menu,
      clickableRows: true
    });
  }
  public get inputsExampleDataTableSettings(): DataTableSettings<MockData> {
    return ({
      displayedColumns: ['checkbox', 'name', 'extra_checkbox', 'input'],
      columnDefinitions: [
        {
          title: 'Name',
          columnName: 'name',
          customHeaderClassLg: 'max-width-180',
          customCellClassLg: 'max-width-180',
          handleCellClick: (row: MockData) => this.exampleSelectionModel.toggle(row)
        },
        {
          title: 'Mandatory',
          columnName: 'extra_checkbox',
          mode: DataColumnMode.checkbox,
          disableFormField: () => false,
          checkboxSettings: {
            checkboxChecked: (item: MockData) => item.mandatory,
            checkboxChange: (event: MatCheckboxChange, item: MockData) => {
              item.mandatory = event.checked;
            }
          }
        },
        {
          title: 'Extra Text',
          columnName: 'input',
          mode: DataColumnMode.input,
          disableFormField: () => false,
          inputSettings: {
            inputChange: (event: KeyboardEvent, row: MockData) => {
              const target = <HTMLInputElement>event.target;
              row.extraText = target.value;
            },
            inputValue: (row: MockData) => row.extraText
          }
        }
      ],
      dataSource: this.exampleDataSource,
      menu: this.menu,
      hideSelectedRowHighlighting: true
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
