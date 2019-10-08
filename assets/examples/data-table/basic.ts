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
const MOCK_DATA: MockData[] = [];

@Component({})
export class DataTableComponent implements OnInit {
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
  constructor() { }
  ngOnInit() {
  }
}



