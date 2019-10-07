export interface DataTableMenuItem<T> {
    icon: string;
    label: string;
    disabled: (row: T) => boolean;
    action: (...args) => void;
}
