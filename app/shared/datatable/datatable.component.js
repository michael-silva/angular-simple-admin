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
var platform_browser_1 = require('@angular/platform-browser');
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
    function DatatableComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.table = new datatable_model_1.TableModel();
        this.columns = [];
        this.pagging = [];
        this.actions = "";
        this.lengths = [10, 25, 50, 100];
    }
    DatatableComponent.prototype.ngOnInit = function () {
        this.draw();
    };
    DatatableComponent.prototype.rowActions = function (row) {
        return this.sanitizer.bypassSecurityTrustHtml(eval(this.actions));
    };
    DatatableComponent.prototype.addColumn = function (column) {
        this.columns.push(column);
    };
    DatatableComponent.prototype.toggleColumn = function (col) {
        col.visible = !col.visible;
    };
    DatatableComponent.prototype.pageTo = function (page) {
        this.table.page = page;
        this.draw();
    };
    DatatableComponent.prototype.draw = function () {
        var _this = this;
        if (!this.url)
            throw new Error('It\'s required a url to draw the table');
        this.http.get(this.url + "/?page=" + this.table.page + "&length=" + this.table.length)
            .map(function (response) { return response.json().data[0]; })
            .toPromise()
            .then(function (data) {
            _this.table = data;
            for (var i = _this.columns.length; i < _this.table.columns.length; i++) {
                if (!_this.columns[i])
                    _this.columns[i] = new column_model_1.ColumnModel();
                Util.Set(_this.columns[i], _this.table.columns[i]);
            }
            _this.pagging = [];
            var last = data.total / data.length;
            var nearests = 2;
            var startRange = Math.max(_this.table.page - nearests, 0);
            var lastRange = Math.min(_this.table.page + 1 + nearests, last);
            if (startRange > 0) {
                _this.pagging.push({ page: 0, label: '1' });
                _this.pagging.push({ page: -1, label: '...' });
            }
            for (var i = startRange; i < lastRange; i++)
                _this.pagging.push({ page: i, label: "" + (i + 1) });
            if (last > lastRange) {
                _this.pagging.push({ page: -1, label: '...' });
                _this.pagging.push({ page: last - 1, label: "" + last });
            }
        })
            .catch(function (e) { return console.log(e); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatatableComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatatableComponent.prototype, "actions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatatableComponent.prototype, "lengths", void 0);
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'datatable',
            templateUrl: 'app/shared/datatable/datatable.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, platform_browser_1.DomSanitizer])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=datatable.component.js.map