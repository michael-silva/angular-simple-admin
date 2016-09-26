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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var users_routing_1 = require('./users.routing');
var users_component_1 = require('./users.component');
var user_list_component_1 = require('./user-list/user-list.component');
var user_profile_component_1 = require('./user-profile/user-profile.component');
var user_wizzard_component_1 = require('./user-wizzard/user-wizzard.component');
var user_tabform_component_1 = require('./user-tabform/user-tabform.component');
// Imports for loading & configuring the in-memory web api
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var users_in_memory_data_service_1 = require('./shared/users-in-memory-data.service');
var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(users_in_memory_data_service_1.UsersInMemoryDataService),
                users_routing_1.usersRouting],
            declarations: [
                users_component_1.UsersComponent,
                user_list_component_1.UserListComponent,
                user_profile_component_1.UserProfileComponent,
                user_tabform_component_1.UserTabFormComponent,
                user_wizzard_component_1.UserWizzardComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map