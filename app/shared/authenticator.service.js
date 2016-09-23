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
var Authenticator = (function () {
    function Authenticator() {
    }
    Authenticator.prototype.getAuthenticatedUser = function () {
        return this.userAuthenticated;
    };
    Authenticator.prototype.isAuthenticated = function () {
        return !!this.userAuthenticated;
    };
    Authenticator.prototype.authenticate = function (login, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var mock = { login: 'rmcbrothers', pass: '123456', token: 'asasasasa' };
            if (mock.login == login && mock.pass == pass) {
                _this.userAuthenticated = { name: 'RMC Brothers', token: 'asasasasa' };
                return resolve(_this.userAuthenticated);
            }
            else
                return reject({ code: 1, message: "User and/or Password are invalids" });
        });
    };
    Authenticator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Authenticator);
    return Authenticator;
}());
exports.Authenticator = Authenticator;
//# sourceMappingURL=authenticator.service.js.map