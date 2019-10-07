import { DataColumnMode } from './data-column-mode';
import { DataColumnCheckboxSettings, DataColumnInputSettings } from './data-column-settings';

export interface DataColumnDefinition<T> {
    // Column Title
    title: string;
    // Corresponds to members of the displayedColumns array. Used to access values from row objects
    columnName: string;
    // If DataName does not correspond to desired value use a custom transformer
    transformer?: (row: T) => string;
    // Use to switch which template is rendered
    mode?: DataColumnMode;
    // Use to disable formfields if present
    disableFormField?: (row: T) => boolean;
    // Used if there is an additional checkbox column
    checkboxSettings?: DataColumnCheckboxSettings<T>;
    // Used if there is an input column
    inputSettings?: DataColumnInputSettings<T>;
    // custom css classes
    customHeaderClassLg?: string;
    customCellClassLg?: string;
    customHeaderClassSm?: string;
    customCellClassSm?: string;
    // If the cells in the column are individually clickable
    handleCellClick?: (row: T) => void;
    // use with mode 'list'
    listAccessor?: (row: T) => string[];
}
