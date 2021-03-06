import { Table } from './../index';
import { Animation, TableEditMode, TablePageSize, TableSortMode, TableColumn } from './../index';
import { AfterViewInit, ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { BaseElement } from './smart.element';
export { Animation, TableColumnDataType, TableColumnFreeze, TableColumnResponsivePriority, TableEditMode, TablePageSize, TableSortMode, TableColumn, ElementRenderMode } from './../index';
export { Smart } from './smart.element';
export { Table } from './../index';
export declare class TableComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    constructor(ref: ElementRef<Table>);
    private eventHandlers;
    nativeElement: Table;
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    createComponent(properties?: {}): any;
    /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
    animation: Animation;
    /** @description Describes the columns properties. */
    columns: TableColumn[];
    /** @description Sets or gets whether the reordering of columns is enabled. */
    columnReorder: boolean;
    /** @description Determines the data source of the table component. */
    dataSource: any;
    /** @description Disables the interaction with the element. */
    disabled: boolean;
    /** @description Sets or gets whether the Table can be edited. */
    editing: boolean;
    /** @description Sets or gets the edit mode. */
    editMode: TableEditMode;
    /** @description Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header. */
    filtering: boolean;
    /** @description Sets or gets whether the Table can be filtered via a filter row. */
    filterRow: boolean;
    /** @description Sets or gets the id of an HTML template element to be applied as a custom filter template. */
    filterTemplate: string;
    /** @description Sets or gets the id of an HTML template element to be applied as footer row(s). */
    footerRow: string;
    /** @description Sets or gets whether the Table's footer is sticky/frozen. */
    freezeFooter: boolean;
    /** @description Sets or gets whether the Table's column header is sticky/frozen. */
    freezeHeader: boolean;
    /** @description Sets or gets whether grouping the Table is enabled. */
    grouping: boolean;
    /** @description Sets or gets the id of an HTML template element to be applied as additional column header(s). */
    headerRow: string;
    /** @description Sets or gets whether navigation with the keyboard is enabled in the Table. */
    keyboardNavigation: boolean;
    /** @description Sets or gets the language. Used in conjunction with the property messages.  */
    locale: string;
    /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
    messages: any;
    /** @description A callback function executed each time a Table cell is rendered. */
    onCellRender: any;
    /** @description A callback function executed each time a Table column header cell is rendered. */
    onColumnRender: {
        (dataField: string, headerCell: HTMLTableCellElement): void;
    };
    /** @description A callback function executed when the Table is being initialized. */
    onInit: {
        (): void;
    };
    /** @description Sets or gets the page size (when paging is enabled). */
    pageSize: TablePageSize;
    /** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
    pageIndex: number;
    /** @description Sets or gets whether paging is enabled. */
    paging: boolean;
    /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
    rightToLeft: boolean;
    /** @description Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it. */
    rowDetailTemplate: string;
    /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
    selection: boolean;
    /** @description Determines the sorting mode of the Table. */
    sortMode: TableSortMode;
    /** @description Determines the theme. Theme defines the look of the element */
    theme: string;
    /** @description This event is triggered when a cell edit operation has been initiated.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    */
    onCellBeginEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's column.
    *   row - The data of the cell's row.
    */
    onCellClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a cell has been edited.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
    *   dataField - The data field of the cell's column.
    *   row - The new data of the cell's row.
    */
    onCellEndEdit: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
    *   dataField - The data field of the cell's column.
    */
    onColumnClick: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a filtering-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
    *   action - The filtering action. Possible actions: 'add', 'remove'.
    *   filters - The added filters. Only when action is 'add'.
    */
    onFilter: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a grouping-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label)
    *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
    *   dataField - The data field of the column whose grouping is modified.
    *   label - The label of the group (only when collapsing/expanding).
    */
    onGroup: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a paging-related action is made.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
    *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
    */
    onPage: EventEmitter<CustomEvent>;
    /** @description This event is triggered when a column header cell has been clicked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
    *   columns - An array with information about the columns the Table has been sorted by.
    */
    onSort: EventEmitter<CustomEvent>;
    /** @description Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    addFilter(dataField: string, filter: any): void;
    /** @description Groups by a column.
    * @param {string} dataField. The column's data field.
    */
    addGroup(dataField: string): void;
    /** @description Begins an edit operation.
    * @param {string | number} row. The id of the row to edit.
    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
    */
    beginEdit(row: string | number, dataField?: string): void;
    /** @description Ends the current edit operation and discards changes.
    */
    cancelEdit(): void;
    /** @description Clears applied filters.
    */
    clearFilters(): void;
    /** @description Clears grouping.
    */
    clearGrouping(): void;
    /** @description Clears selection.
    */
    clearSelection(): void;
    /** @description Clears the Table sorting.
    */
    clearSort(): void;
    /** @description Collapses all rows (in tree mode).
    */
    collapseAllRows(): void;
    /** @description Collapses a group.
    * @param {string} index. The group's hierarchical index.
    */
    collapseGroup(index: string): void;
    /** @description Collapses a group.
    * @param {string | number} rowId. The id of the row to collapse.
    */
    collapseRow(rowId: string | number): void;
    /** @description Ends the current edit operation and saves changes.
    */
    endEdit(): void;
    /** @description Expands all rows (in tree mode).
    */
    expandAllRows(): void;
    /** @description Expands a group.
    * @param {string} index. The group's hierarchical index.
    */
    expandGroup(index: string): void;
    /** @description Expands a row (in tree mode).
    * @param {string | number} rowId. The id of the row to expand.
    */
    expandRow(rowId: string | number): void;
    /** @description Exports the Table's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    exportData(dataFormat: any, fileName?: any, exportFiltered?: any, callback?: any): Promise<any>;
    /** @description Returns an array of selected row ids.
    * @returns {(string | number)[]}
  */
    getSelection(): Promise<any>;
    /** @description Returns the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @returns {any}
  */
    getValue(row: any, dataField: any): Promise<any>;
    /** @description Navigates to a page.
    * @param {number} pageIndex. The zero-based page index to navigate to.
    */
    navigateTo(pageIndex: number): void;
    /** @description Refreshes the table.
    */
    refresh(): void;
    /** @description Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    removeFilter(dataField: string): void;
    /** @description Removes grouping by a column.
    * @param {string} dataField. The column's data field.
    */
    removeGroup(dataField: string): void;
    /** @description Selects a row.
    * @param {string | number} rowId. The id of the row to select.
    */
    select(rowId: string | number): void;
    /** @description Sets the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @param {any} value. The new value of the cell.
    */
    setValue(row: string | number, dataField: string, value: any): void;
    /** @description Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending) and 'desc' (descending).
    */
    sortBy(columnDataField: string, sortOrder?: string): void;
    /** @description Unselects a row.
    * @param {string | number} rowId. The id of the row to unselect.
    */
    unselect(rowId: string | number): void;
    readonly isRendered: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /** @description Add event listeners. */
    private listen;
    /** @description Remove event listeners. */
    private unlisten;
}
