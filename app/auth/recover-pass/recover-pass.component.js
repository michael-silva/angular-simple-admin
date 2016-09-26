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
var newpass_model_1 = require('../shared/newpass.model');
var authenticator_service_1 = require('../../shared/authenticator.service');
var RecoverPassComponent = (function () {
    function RecoverPassComponent(authenticator, router, route) {
        this.authenticator = authenticator;
        this.router = router;
        this.route = route;
        this.model = new newpass_model_1.NewPasswordModel();
    }
    RecoverPassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) { return _this.model.code = params['code']; });
        this.authenticator.checkRecoverPassCode(this.model.code)
            .then(function (name) {
            _this.userName = name;
        }).catch(function (error) {
            _this.invalidCodeMessage = error.message;
        });
    };
    RecoverPassComponent.prototype.saveNewPassword = function () {
        var _this = this;
        this.authenticator.changePassword(this.model)
            .then(function (user) {
            _this.router.navigate(['/home']);
        }).catch(function (error) {
            _this.errorMessage = error.message;
        });
    };
    RecoverPassComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/auth/recover-pass/recover-pass.component.html'
        }), 
        __metadata('design:paramtypes', [authenticator_service_1.Authenticator, router_1.Router, router_1.ActivatedRoute])
    ], RecoverPassComponent);
    return RecoverPassComponent;
}());
exports.RecoverPassComponent = RecoverPassComponent;
//# sourceMappingURL=recover-pass.component.js.map