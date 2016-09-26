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
var UserListComponent = (function () {
    function UserListComponent() {
        this.table = {
            columns: [{ name: 'Id' }, { name: 'Name' }, { name: 'Age' }, { name: 'Date' }],
            data: [
                { Id: 1, Name: 'Admin', Age: 24, Date: '21/04/1996' },
                { Id: 1, Name: 'Finance', Age: 26, Date: '21/04/1996' },
                { Id: 1, Name: 'Marketing', Age: 21, Date: '21/04/1996' },
                { Id: 1, Name: 'User', Age: 34, Date: '21/04/1996' },
                { Id: 1, Name: 'Admin', Age: 40, Date: '21/04/1996' },
                { Id: 1, Name: 'Finance', Age: 28, Date: '21/04/1996' },
                { Id: 1, Name: 'Simple', Age: 32, Date: '21/04/1996' },
                { Id: 1, Name: 'Simple', Age: 36, Date: '21/04/1996' },
                { Id: 1, Name: 'User', Age: 42, Date: '21/04/1996' },
                { Id: 1, Name: 'Admin', Age: 32, Date: '21/04/1996' },
                { Id: 1, Name: 'Admin', Age: 26, Date: '21/04/1996' },
                { Id: 1, Name: 'Finance', Age: 28, Date: '21/04/1996' },
                { Id: 1, Name: 'Marketing', Age: 30, Date: '21/04/1996' },
                { Id: 1, Name: 'Finance', Age: 24, Date: '21/04/1996' },
                { Id: 1, Name: 'Simple', Age: 21, Date: '21/04/1996' },
                { Id: 1, Name: 'User', Age: 20, Date: '21/04/1996' },
                { Id: 1, Name: 'Admin', Age: 23, Date: '21/04/1996' },
                { Id: 1, Name: 'Simple', Age: 29, Date: '21/04/1996' },
                { Id: 1, Name: 'Admin', Age: 24, Date: '21/04/1996' }]
        };
        this.keys = Object.keys(this.table.data[0]);
    }
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: 'app/users/user-list/user-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map