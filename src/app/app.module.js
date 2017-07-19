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
// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }  from './shared/in-memory-data.service';
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var app_navbar_component_1 = require('./app-navbar.component');
var home_component_1 = require('./home/home.component');
var help_component_1 = require('./help/help.component');
var not_found_component_1 = require('./errors/not-found/not-found.component');
var authenticator_service_1 = require('./shared/authenticator.service');
var dialog_service_1 = require('./shared/dialog.service');
var config_service_1 = require('./shared/config.service');
var auth_guard_service_1 = require('./shared/auth-guard.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                //InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_1.ROUTING],
            declarations: [
                app_component_1.AppComponent,
                app_navbar_component_1.AppNavbarComponent,
                home_component_1.HomeComponent,
                help_component_1.HelpComponent,
                not_found_component_1.NotFoundComponent],
            providers: [
                config_service_1.ConfigService,
                dialog_service_1.DialogService,
                authenticator_service_1.Authenticator,
                auth_guard_service_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map