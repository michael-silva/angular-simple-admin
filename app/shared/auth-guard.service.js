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
var authenticator_service_1 = require('./authenticator.service');
var AuthGuard = (function () {
    function AuthGuard(authenticator, router) {
        this.authenticator = authenticator;
        this.router = router;
        this.authRoute = "/auth";
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authenticator.isAuthenticated())
            return true;
        this.redirectAuth(state.url);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        var isAuth = this.authenticator.isAuthenticated();
        if (!isAuth && url !== this.authRoute) {
            this.redirectAuth(url);
            return false;
        }
        else if (isAuth && url === this.authRoute) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AuthGuard.prototype.redirectAuth = function (url) {
        this.authenticator.redirectUrl = url;
        this.router.navigate([this.authRoute]);
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [authenticator_service_1.Authenticator, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-guard.service.js.map