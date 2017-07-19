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
var router_1 = require('@angular/router');
var authenticator_service_1 = require('./shared/authenticator.service');
var dialog_service_1 = require('./shared/dialog.service');
var AppNavbarComponent = (function () {
    function AppNavbarComponent(authenticator, dialogService, router) {
        this.authenticator = authenticator;
        this.dialogService = dialogService;
        this.router = router;
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticator.userAuthenticated;
        this.authenticator.getAuthenticatedUser()
            .subscribe(function (user) { return _this.user = user; });
    };
    AppNavbarComponent.prototype.logOut = function () {
        var _this = this;
        this.dialogService.confirm("Do you really would like to exit?")
            .then(function () { return _this.authenticator.logOut().then(function () { return _this.router.navigate(['/auth']); }); });
        return false;
    };
    AppNavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: 'app/app-navbar.component.html'
        }), 
        __metadata('design:paramtypes', [authenticator_service_1.Authenticator, dialog_service_1.DialogService, router_1.Router])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());
exports.AppNavbarComponent = AppNavbarComponent;
//# sourceMappingURL=app-navbar.component.js.map