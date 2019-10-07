export enum DataColumnMode {
    // If this column is a number index column
    count = 'count',
    // If Data is nested (use the getNestedValue method)
    nested = 'nested',
    // If DataName does not correspond to desired value use a custom transformer
    transformer = 'transformer',
    // If this is a menu column
    menu = 'menu',
    // If an additional checkboxes is required in the table
    checkbox = 'extra-checkbox',
    // If this is a column with an input
    input = 'input',
    // Used for rendering a list in the cell
    list = 'list'
}
