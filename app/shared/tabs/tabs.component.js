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
var TabsComponent = (function () {
    function TabsComponent(route) {
        this.route = route;
        this.tabs = [];
    }
    TabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.fragment.map(function (fragment) { return fragment; })
            .subscribe(function (fragment) {
            console.log(fragment);
            _this.selectTab(_this.tabs.find(function (x) { return x.id == fragment; }));
        });
    };
    TabsComponent.prototype.addTab = function (tab) {
        if (this.tabs.length == 0)
            tab.active();
        this.tabs.push(tab);
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) { return tab.inactive(); });
        tab.active();
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tabs',
            templateUrl: 'app/shared/tabs/tabs.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map