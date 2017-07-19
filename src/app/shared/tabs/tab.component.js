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
var tabs_component_1 = require('./tabs.component');
var TabComponent = (function () {
    function TabComponent(element, tabs) {
        this.element = element;
        this.isactive = false;
        tabs.addTab(this);
        this.element.nativeElement.classList.add('tab-pane');
    }
    TabComponent.prototype.ngAfterViewInit = function () {
    };
    TabComponent.prototype.active = function () {
        if (!this.isactive) {
            this.isactive = true;
            this.element.nativeElement.classList.add('active');
        }
    };
    TabComponent.prototype.inactive = function () {
        if (this.isactive) {
            this.isactive = false;
            this.element.nativeElement.classList.remove('active');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "tabName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "id", void 0);
    TabComponent = __decorate([
        core_1.Component({
            selector: 'tab',
            templateUrl: 'app/shared/tabs/tab.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, tabs_component_1.TabsComponent])
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;
//# sourceMappingURL=tab.component.js.map