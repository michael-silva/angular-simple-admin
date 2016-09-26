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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
require('rxjs/add/operator/map');
var Authenticator = (function () {
    function Authenticator() {
        this.userObservable = new BehaviorSubject_1.BehaviorSubject(null);
        this.redirectUrl = '';
        var storage = localStorage.getItem('user');
        if (storage) {
            var user = JSON.parse(storage);
            this.userObservable.next(user);
        }
    }
    Object.defineProperty(Authenticator.prototype, "userAuthenticated", {
        get: function () {
            return this.userObservable.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Authenticator.prototype.getAuthenticatedUser = function () {
        return this.userObservable.asObservable();
    };
    Authenticator.prototype.isAuthenticated = function () {
        return this.userObservable.asObservable().map(function (user) { return !!user; });
    };
    Authenticator.prototype.authenticate = function (login, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var mock = { login: 'admin', pass: '123456', token: 'asasasasa' };
            if (mock.login == login && mock.pass == pass) {
                var user = { name: 'User Name', token: 'asasasasa' };
                _this.userObservable.next(user);
                localStorage.setItem('user', JSON.stringify(user));
                return resolve(user);
            }
            else
                return reject({ code: 1, message: "User and/or Password are invalids" });
        });
    };
    Authenticator.prototype.requestRecoverPass = function (email) {
        return Promise.resolve("A recover password link was sent to your email.");
    };
    Authenticator.prototype.changePassword = function (model) {
        var user = { name: 'User Name', token: 'asasasasa' };
        this.userObservable.next(user);
        return Promise.resolve("Your new password has been saved with success");
    };
    Authenticator.prototype.checkRecoverPassCode = function (code) {
        return new Promise(function (resolve, reject) {
            if (code.length <= 2)
                return reject({ code: 1, message: "Recover code invalid or expired!" });
            return resolve('User Name');
        });
    };
    Authenticator.prototype.logOut = function () {
        this.userObservable.next(null);
        localStorage.setItem('user', null);
        return Promise.resolve();
    };
    Authenticator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Authenticator);
    return Authenticator;
}());
exports.Authenticator = Authenticator;
//# sourceMappingURL=authenticator.service.js.map