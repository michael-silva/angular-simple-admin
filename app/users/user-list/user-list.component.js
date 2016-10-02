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
var http_1 = require('@angular/http');
var TableSearch = (function () {
    function TableSearch() {
    }
    return TableSearch;
}());
var TableColumn = (function () {
    function TableColumn() {
    }
    return TableColumn;
}());
var ColumnModel = (function (_super) {
    __extends(ColumnModel, _super);
    function ColumnModel() {
        _super.apply(this, arguments);
        this.visible = true;
    }
    return ColumnModel;
}(TableColumn));
var TableModel = (function () {
    function TableModel() {
        this.page = 0;
        this.length = 10;
    }
    return TableModel;
}());
var TablePage = (function () {
    function TablePage() {
    }
    return TablePage;
}());
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
var UserListComponent = (function () {
    function UserListComponent(http) {
        this.http = http;
        this.table = new TableModel();
        this.columns = [];
        this.pagging = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var page = this.table ? this.table.page | 0 : 0;
        this.pageTo(page);
    };
    UserListComponent.prototype.toggleColumn = function (col) {
        col.visible = !col.visible;
    };
    UserListComponent.prototype.pageTo = function (page) {
        var _this = this;
        this.http.get("api/users/?page=" + page + "&length=" + this.table.length)
            .map(function (response) { return response.json().data[0]; })
            .toPromise()
            .then(function (data) {
            _this.table = data;
            for (var i = 0; i < _this.table.columns.length; i++) {
                if (!_this.columns[i])
                    _this.columns[i] = new ColumnModel();
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
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'app/users/user-list/user-list.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map