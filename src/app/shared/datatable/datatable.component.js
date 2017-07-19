"use strict";
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
var http_1 = require('@angular/http');
var datatable_model_1 = require('./datatable.model');
var column_model_1 = require('./column.model');
var Util = (function () {
    function Util() {
    }
    Util.Set = function (target, obj) {
        for (var key in obj) {
            target[key] = obj[key];
        }
    };
    return Util;
}());
var DatatableComponent = (function () {
    function DatatableComponent(http) {
        this.http = http;
        this.self = this;
        this.table = new datatable_model_1.TableModel();
        this.columns = [];
        this.pagging = [];
        this.checks = [];
        this.lengths = [10, 25, 50, 100];
    }
    DatatableComponent.prototype.ngOnInit = function () {
        localStorage.setItem('tb-checks', '');
        this.draw();
    };
    DatatableComponent.prototype.check = function (value, checked) {
        var index = this.checks.indexOf(value);
        if (index >= 0 && checked) {
            this.checks = this.checks.slice(index, 1);
        }
        else if (index == -1 && checked) {
            this.checks.push(value);
        }
    };
    DatatableComponent.prototype.toggleSelect = function (row) {
        row.selected = !row.selected;
        this.check(row.id, row.selected);
    };
    DatatableComponent.prototype.toggleAll = function () {
        var _this = this;
        this.allChecked = !this.allChecked;
        this.table.data.forEach(function (row) {
            row.selected = _this.allChecked;
            _this.check(row.id, row.selected);
        });
    };
    DatatableComponent.prototype.addColumn = function (column) {
        this.columns.push(column);
    };
    DatatableComponent.prototype.toggleColumn = function (col) {
        col.visible = !col.visible;
    };
    DatatableComponent.prototype.isOrdered = function (col) {
        return col.order != null;
    };
    DatatableComponent.prototype.isOrderedAsc = function (col) {
        return col.order == column_model_1.OrderBy.Asc;
    };
    DatatableComponent.prototype.isOrderedDesc = function (col) {
        return col.order == column_model_1.OrderBy.Desc;
    };
    DatatableComponent.prototype.toggleOrder = function (col) {
        if (col.orderable) {
            if (this.isOrdered(col)) {
                if (this.isOrderedAsc(col))
                    col.order = column_model_1.OrderBy.Desc;
                else
                    col.order = column_model_1.OrderBy.Asc;
            }
            else {
                this.columns.forEach(function (c) { return c.order = null; });
                col.order = column_model_1.OrderBy.Asc;
            }
        }
    };
    DatatableComponent.prototype.pageTo = function (page) {
        this.table.page = page;
        this.draw();
    };
    DatatableComponent.prototype.preparePagination = function (data) {
        this.pagging = [];
        var last = data.total / data.length;
        var nearests = 2;
        var startRange = Math.max(this.table.page - nearests, 0);
        var lastRange = Math.min(this.table.page + 1 + nearests, last);
        if (startRange > 0) {
            this.pagging.push({ page: 0, label: '1' });
            this.pagging.push({ page: -1, label: '...' });
        }
        for (var i = startRange; i < lastRange; i++)
            this.pagging.push({ page: i, label: "" + (i + 1) });
        if (last > lastRange) {
            this.pagging.push({ page: -1, label: '...' });
            this.pagging.push({ page: last - 1, label: "" + last });
        }
    };
    DatatableComponent.prototype.draw = function () {
        var _this = this;
        if (!this.url)
            throw new Error('It\'s required a url to draw the table');
        localStorage.setItem('tb-checks', JSON.stringify(this.checks));
        this.http.get(this.url + "/?page=" + this.table.page + "&length=" + this.table.length)
            .map(function (response) {
            console.log(response);
            return response.json().data[0];
        })
            .toPromise()
            .then(function (data) {
            _this.table = data;
            _this.allChecked = false;
            for (var i = _this.columns.length; i < _this.table.columns.length; i++) {
                if (!_this.columns[i])
                    _this.columns[i] = new column_model_1.ColumnModel();
                Util.Set(_this.columns[i], _this.table.columns[i]);
            }
            if (_this.checks.length > 0) {
                for (var i = 0; i < _this.table.data.length; i++) {
                    var index = _this.checks.indexOf(_this.table.data[i].id);
                    _this.table.data[i].selected = index >= 0;
                }
            }
            _this.preparePagination(data);
        })
            .catch(function (e) { return console.log(e); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatatableComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatatableComponent.prototype, "lengths", void 0);
    __decorate([
        core_1.ContentChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], DatatableComponent.prototype, "itemTemplate", void 0);
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'datatable',
            templateUrl: 'app/shared/datatable/datatable.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=datatable.component.js.map