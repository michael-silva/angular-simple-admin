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
//our root app component
var core_1 = require('@angular/core');
// Helper component to add dynamic components
var DclWrapper = (function () {
    function DclWrapper(componentFactoryResolver, compiler) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.compiler = compiler;
        this.isViewInitialized = false;
    }
    DclWrapper.prototype.updateComponent = function () {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        //this.resolver.resolveComponent(this.type).then((factory:ComponentFactory<any>) => {
        this.cmpRef = this.target.createComponent(factory);
    };
    DclWrapper.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    DclWrapper.prototype.ngAfterViewInit = function () {
        this.isViewInitialized = true;
        this.updateComponent();
    };
    DclWrapper.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    __decorate([
        core_1.ViewChild('target', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], DclWrapper.prototype, "target", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DclWrapper.prototype, "type", void 0);
    DclWrapper = __decorate([
        core_1.Component({
            selector: 'dcl-wrapper',
            template: "<div #target></div>"
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.Compiler])
    ], DclWrapper);
    return DclWrapper;
}());
exports.DclWrapper = DclWrapper;
//# sourceMappingURL=component-outlet.directive.js.map