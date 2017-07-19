"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var datatable_component_1 = require('./datatable.component');
var column_model_1 = require('./column.model');
var ColumnComponent = (function (_super) {
    __extends(ColumnComponent, _super);
    function ColumnComponent(table) {
        _super.call(this);
        table.addColumn(this);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColumnComponent.prototype, "title", void 0);
    ColumnComponent = __decorate([
        core_1.Component({
            selector: 'column',
            templateUrl: 'app/shared/datatable/column.component.html'
        }), 
        __metadata('design:paramtypes', [datatable_component_1.DatatableComponent])
    ], ColumnComponent);
    return ColumnComponent;
}(column_model_1.ColumnModel));
exports.ColumnComponent = ColumnComponent;
//# sourceMappingURL=column.component.js.map