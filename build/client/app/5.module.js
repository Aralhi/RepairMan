webpackJsonp([5],{

/***/ "../node_modules/css-loader/index.js!./app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "h3 {\n    text-align: center; margin-bottom: 10;\n}\n[class*='col-'] {\n    padding-right: 20px;\n    padding-bottom: 20px;\n}\n.module {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    max-height: 120px;\n    min-width: 120px;\n    background-color: orangered;\n    border-radius: 2px;\n}\n\n.module:hover {\n    background-color: darkred;\n    cursor: pointer;\n    color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js!./app/components/dashboard/dashboard.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    \n</div>"

/***/ }),

/***/ "./app/components/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("../node_modules/@angular/router/esm5/router.js");
var hero_service_1 = __webpack_require__("./app/services/hero.service.ts");
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.heroService.getHeroes()
        //     .subscribe(heroes => this.heroes = heroes);
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero._id];
        this.router.navigate(link);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        template: __webpack_require__("./app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./app/components/dashboard/dashboard.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var share_module_1 = __webpack_require__("./app/components/share/share.module.ts");
var router_1 = __webpack_require__("../node_modules/@angular/router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("./app/components/dashboard/dashboard.component.ts");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            share_module_1.ShareModule,
            router_1.RouterModule.forChild([
                {
                    path: '',
                    component: dashboard_component_1.DashboardComponent
                }
            ])
        ],
        declarations: [dashboard_component_1.DashboardComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;


/***/ })

});
//# sourceMappingURL=5.module.map