"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TableColumn = (function () {
    function TableColumn() {
    }
    return TableColumn;
}());
exports.TableColumn = TableColumn;
var ColumnModel = (function (_super) {
    __extends(ColumnModel, _super);
    function ColumnModel() {
        _super.apply(this, arguments);
        this.visible = true;
        this.row = {};
    }
    return ColumnModel;
}(TableColumn));
exports.ColumnModel = ColumnModel;
//# sourceMappingURL=column.model.js.map