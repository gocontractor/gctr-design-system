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
    public get advancedExampleDataTableSettings(): DataTableSettings<MockData> {
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




