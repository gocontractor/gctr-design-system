import { DataColumnDefinition } from './data-column-definition';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableMenuItem } from './data-table-menu-item';

export interface DataTableSettings<T> {
    displayedColumns: string[];
    columnDefinitions: DataColumnDefinition<T>[];
    dataSource: MatTableDataSource<T>;
    menu?: DataTableMenuItem<T>[];
    // Hide the row highlighting
    hideSelectedRowHighlighting?: boolean;
    // Use Clickable Rows
    clickableRows?: boolean;
    handleRowClick?: (row: T) => void;
}

export interface DataColumnCheckboxSettings<T> {
    checkboxChange: (event: MatCheckboxChange, row: T) => void;
    checkboxChecked: (row: T) => boolean;
}
export interface DataColumnInputSettings<T> {
    inputChange: (event: KeyboardEvent, row: T) => void;
    inputValue: (row: T) => string;
}
