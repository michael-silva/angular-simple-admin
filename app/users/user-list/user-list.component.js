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
var TableModel = (function () {
    function TableModel() {
        this.page = 0;
        this.length = 10;
    }
    return TableModel;
}());
var TableBuilder = (function () {
    function TableBuilder() {
    }
    return TableBuilder;
}());
var UserListComponent = (function () {
    function UserListComponent(http) {
        this.http = http;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/users/?page=0')
            .map(function (response) { return response.json().data[0]; })
            .toPromise()
            .then(function (data) { return _this.table = data; })
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