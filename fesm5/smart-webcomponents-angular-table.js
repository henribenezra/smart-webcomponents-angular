
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.table';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
import { EventEmitter, Output, Input, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        var that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = function () {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = function () {
            that.onDetach.emit(that.nativeElement);
        };
    }
    BaseElement.prototype.addEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.addEventListener(type, listener, options);
    };
    BaseElement.prototype.removeEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.removeEventListener(type, listener, options);
    };
    BaseElement.prototype.dispatchEvent = function (event) {
        return this.nativeElement.dispatchEvent(event);
    };
    BaseElement.prototype.blur = function () {
        this.nativeElement.blur();
    };
    BaseElement.prototype.click = function () {
        this.nativeElement.click();
    };
    BaseElement.prototype.focus = function (options) {
        this.nativeElement.focus(options);
    };
    Object.defineProperty(BaseElement.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Output()
    ], BaseElement.prototype, "onCreate", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onReady", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onAttach", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onDetach", void 0);
    __decorate([
        Input()
    ], BaseElement.prototype, "locale", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "messages", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "theme", null);
    return BaseElement;
}());
var Smart = window.Smart;

var TableComponent = /** @class */ (function (_super) {
    __extends(TableComponent, _super);
    function TableComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /** @description This event is triggered when a cell edit operation has been initiated.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
        *   dataField - The data field of the cell's column.
        *   row - The data of the cell's row.
        */
        _this.onCellBeginEdit = new EventEmitter();
        /** @description This event is triggered when a cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
        *   dataField - The data field of the cell's column.
        *   row - The data of the cell's row.
        */
        _this.onCellClick = new EventEmitter();
        /** @description This event is triggered when a cell has been edited.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
        *   dataField - The data field of the cell's column.
        *   row - The new data of the cell's row.
        */
        _this.onCellEndEdit = new EventEmitter();
        /** @description This event is triggered when a column header cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
        *   dataField - The data field of the cell's column.
        */
        _this.onColumnClick = new EventEmitter();
        /** @description This event is triggered when a filtering-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
        *   action - The filtering action. Possible actions: 'add', 'remove'.
        *   filters - The added filters. Only when action is 'add'.
        */
        _this.onFilter = new EventEmitter();
        /** @description This event is triggered when a grouping-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label)
        *   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
        *   dataField - The data field of the column whose grouping is modified.
        *   label - The label of the group (only when collapsing/expanding).
        */
        _this.onGroup = new EventEmitter();
        /** @description This event is triggered when a paging-related action is made.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	action)
        *   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
        */
        _this.onPage = new EventEmitter();
        /** @description This event is triggered when a column header cell has been clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
        *   columns - An array with information about the columns the Table has been sorted by.
        */
        _this.onSort = new EventEmitter();
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    TableComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-table');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(TableComponent.prototype, "animation", {
        /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
        get: function () {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columns", {
        /** @description Describes the columns properties. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columns : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columns = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columnReorder", {
        /** @description Sets or gets whether the reordering of columns is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.columnReorder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.columnReorder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "dataSource", {
        /** @description Determines the data source of the table component. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "disabled", {
        /** @description Disables the interaction with the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "editing", {
        /** @description Sets or gets whether the Table can be edited. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editing : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editing = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "editMode", {
        /** @description Sets or gets the edit mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "filtering", {
        /** @description Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filtering : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filtering = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "filterRow", {
        /** @description Sets or gets whether the Table can be filtered via a filter row. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterRow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterRow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "filterTemplate", {
        /** @description Sets or gets the id of an HTML template element to be applied as a custom filter template. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "footerRow", {
        /** @description Sets or gets the id of an HTML template element to be applied as footer row(s). */
        get: function () {
            return this.nativeElement ? this.nativeElement.footerRow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.footerRow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "freezeFooter", {
        /** @description Sets or gets whether the Table's footer is sticky/frozen. */
        get: function () {
            return this.nativeElement ? this.nativeElement.freezeFooter : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.freezeFooter = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "freezeHeader", {
        /** @description Sets or gets whether the Table's column header is sticky/frozen. */
        get: function () {
            return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "grouping", {
        /** @description Sets or gets whether grouping the Table is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouping : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouping = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "headerRow", {
        /** @description Sets or gets the id of an HTML template element to be applied as additional column header(s). */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerRow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerRow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "keyboardNavigation", {
        /** @description Sets or gets whether navigation with the keyboard is enabled in the Table. */
        get: function () {
            return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "onCellRender", {
        /** @description A callback function executed each time a Table cell is rendered. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onCellRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "onColumnRender", {
        /** @description A callback function executed each time a Table column header cell is rendered. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "onInit", {
        /** @description A callback function executed when the Table is being initialized. */
        get: function () {
            return this.nativeElement ? this.nativeElement.onInit : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.onInit = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "pageSize", {
        /** @description Sets or gets the page size (when paging is enabled). */
        get: function () {
            return this.nativeElement ? this.nativeElement.pageSize : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pageSize = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "pageIndex", {
        /** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
        get: function () {
            return this.nativeElement ? this.nativeElement.pageIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "paging", {
        /** @description Sets or gets whether paging is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.paging : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.paging = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "rowDetailTemplate", {
        /** @description Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rowDetailTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rowDetailTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "selection", {
        /** @description Sets or gets whether row selection (via checkboxes) is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "sortMode", {
        /** @description Determines the sorting mode of the Table. */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Adds a filter to a specific column.
    * @param {string} dataField. The column's data field.
    * @param {any} filter. FilterGroup object.
    */
    TableComponent.prototype.addFilter = function (dataField, filter) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addFilter(dataField, filter);
            });
        }
    };
    /** @description Groups by a column.
    * @param {string} dataField. The column's data field.
    */
    TableComponent.prototype.addGroup = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.addGroup(dataField);
            });
        }
    };
    /** @description Begins an edit operation.
    * @param {string | number} row. The id of the row to edit.
    * @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
    */
    TableComponent.prototype.beginEdit = function (row, dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(row, dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.beginEdit(row, dataField);
            });
        }
    };
    /** @description Ends the current edit operation and discards changes.
    */
    TableComponent.prototype.cancelEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.cancelEdit();
            });
        }
    };
    /** @description Clears applied filters.
    */
    TableComponent.prototype.clearFilters = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearFilters();
            });
        }
    };
    /** @description Clears grouping.
    */
    TableComponent.prototype.clearGrouping = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearGrouping();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearGrouping();
            });
        }
    };
    /** @description Clears selection.
    */
    TableComponent.prototype.clearSelection = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSelection();
            });
        }
    };
    /** @description Clears the Table sorting.
    */
    TableComponent.prototype.clearSort = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSort();
            });
        }
    };
    /** @description Collapses all rows (in tree mode).
    */
    TableComponent.prototype.collapseAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseAllRows();
            });
        }
    };
    /** @description Collapses a group.
    * @param {string} index. The group's hierarchical index.
    */
    TableComponent.prototype.collapseGroup = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseGroup(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseGroup(index);
            });
        }
    };
    /** @description Collapses a group.
    * @param {string | number} rowId. The id of the row to collapse.
    */
    TableComponent.prototype.collapseRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.collapseRow(rowId);
            });
        }
    };
    /** @description Ends the current edit operation and saves changes.
    */
    TableComponent.prototype.endEdit = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.endEdit();
            });
        }
    };
    /** @description Expands all rows (in tree mode).
    */
    TableComponent.prototype.expandAllRows = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRows();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandAllRows();
            });
        }
    };
    /** @description Expands a group.
    * @param {string} index. The group's hierarchical index.
    */
    TableComponent.prototype.expandGroup = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandGroup(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandGroup(index);
            });
        }
    };
    /** @description Expands a row (in tree mode).
    * @param {string | number} rowId. The id of the row to expand.
    */
    TableComponent.prototype.expandRow = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRow(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.expandRow(rowId);
            });
        }
    };
    /** @description Exports the Table's data.
    * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
    * @param {string} fileName?. The name of the file to export to
    * @param {boolean} exportFiltered?. If set to true, exports only filtered records
    * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
    * @returns {any}
  */
    TableComponent.prototype.exportData = function (dataFormat, fileName, exportFiltered, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.exportData(dataFormat, fileName, exportFiltered, callback);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Returns an array of selected row ids.
    * @returns {(string | number)[]}
  */
    TableComponent.prototype.getSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getSelection();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Returns the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @returns {any}
  */
    TableComponent.prototype.getValue = function (row, dataField) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getValue(row, dataField);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Navigates to a page.
    * @param {number} pageIndex. The zero-based page index to navigate to.
    */
    TableComponent.prototype.navigateTo = function (pageIndex) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.navigateTo(pageIndex);
            });
        }
    };
    /** @description Refreshes the table.
    */
    TableComponent.prototype.refresh = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.refresh();
            });
        }
    };
    /** @description Removes filters applied to a specific column.
    * @param {string} dataField. The column's data field.
    */
    TableComponent.prototype.removeFilter = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeFilter(dataField);
            });
        }
    };
    /** @description Removes grouping by a column.
    * @param {string} dataField. The column's data field.
    */
    TableComponent.prototype.removeGroup = function (dataField) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(dataField);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeGroup(dataField);
            });
        }
    };
    /** @description Selects a row.
    * @param {string | number} rowId. The id of the row to select.
    */
    TableComponent.prototype.select = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(rowId);
            });
        }
    };
    /** @description Sets the value of a cell.
    * @param {string | number} row. The id of the cell's row.
    * @param {string} dataField. The dataField of the cell's column.
    * @param {any} value. The new value of the cell.
    */
    TableComponent.prototype.setValue = function (row, dataField, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.setValue(row, dataField, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.setValue(row, dataField, value);
            });
        }
    };
    /** @description Sorts the Table by a column.
    * @param {string} columnDataField. Column field name.
    * @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending) and 'desc' (descending).
    */
    TableComponent.prototype.sortBy = function (columnDataField, sortOrder) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDataField, sortOrder);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.sortBy(columnDataField, sortOrder);
            });
        }
    };
    /** @description Unselects a row.
    * @param {string | number} rowId. The id of the row to unselect.
    */
    TableComponent.prototype.unselect = function (rowId) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselect(rowId);
            });
        }
    };
    Object.defineProperty(TableComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    TableComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    TableComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    TableComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['cellBeginEditHandler'] = function (event) { that.onCellBeginEdit.emit(event); };
        that.nativeElement.addEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);
        that.eventHandlers['cellClickHandler'] = function (event) { that.onCellClick.emit(event); };
        that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        that.eventHandlers['cellEndEditHandler'] = function (event) { that.onCellEndEdit.emit(event); };
        that.nativeElement.addEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);
        that.eventHandlers['columnClickHandler'] = function (event) { that.onColumnClick.emit(event); };
        that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
        that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
        that.eventHandlers['groupHandler'] = function (event) { that.onGroup.emit(event); };
        that.nativeElement.addEventListener('group', that.eventHandlers['groupHandler']);
        that.eventHandlers['pageHandler'] = function (event) { that.onPage.emit(event); };
        that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);
        that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
        that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
    };
    /** @description Remove event listeners. */
    TableComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['cellBeginEditHandler']) {
            that.nativeElement.removeEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);
        }
        if (that.eventHandlers['cellClickHandler']) {
            that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
        }
        if (that.eventHandlers['cellEndEditHandler']) {
            that.nativeElement.removeEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);
        }
        if (that.eventHandlers['columnClickHandler']) {
            that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
        }
        if (that.eventHandlers['filterHandler']) {
            that.nativeElement.onfilterHandler = null;
        }
        if (that.eventHandlers['groupHandler']) {
            that.nativeElement.removeEventListener('group', that.eventHandlers['groupHandler']);
        }
        if (that.eventHandlers['pageHandler']) {
            that.nativeElement.removeEventListener('page', that.eventHandlers['pageHandler']);
        }
        if (that.eventHandlers['sortHandler']) {
            that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
        }
    };
    TableComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], TableComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "columns", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "columnReorder", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "editing", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "editMode", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "filtering", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "filterRow", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "filterTemplate", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "footerRow", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "freezeFooter", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "freezeHeader", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "grouping", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "headerRow", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "keyboardNavigation", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "onCellRender", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "onColumnRender", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "onInit", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "pageSize", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "pageIndex", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "paging", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "rowDetailTemplate", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "selection", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "sortMode", null);
    __decorate([
        Input()
    ], TableComponent.prototype, "theme", null);
    __decorate([
        Output()
    ], TableComponent.prototype, "onCellBeginEdit", void 0);
    __decorate([
        Output()
    ], TableComponent.prototype, "onCellClick", void 0);
    __decorate([
        Output()
    ], TableComponent.prototype, "onCellEndEdit", void 0);
    __decorate([
        Output()
    ], TableComponent.prototype, "onColumnClick", void 0);
    __decorate([
        Output()
    ], TableComponent.prototype, "onFilter", void 0);
    __decorate([
        Output()
    ], TableComponent.prototype, "onGroup", void 0);
    __decorate([
        Output()
    ], TableComponent.prototype, "onPage", void 0);
    __decorate([
        Output()
    ], TableComponent.prototype, "onSort", void 0);
    TableComponent = __decorate([
        Directive({
            selector: 'smart-table, [smart-table]'
        })
    ], TableComponent);
    return TableComponent;
}(BaseElement));

var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        NgModule({
            declarations: [TableComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [TableComponent]
        })
    ], TableModule);
    return TableModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { Smart, TableComponent, TableModule, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-table.js.map
