webpackJsonp([7],{

/***/ "./app/components/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<h2>My Heroes</h2>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"error\" *ngIf=\"error\">{{error}}</div>\n        <div class=\"pull-right\">\n            <button class=\"btn btn-success\" (click)=\"addHero()\">Add New Hero</button>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>Object Id</th>\n                    <th>Name</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let hero of heroes\" [class.active]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n                    <td>{{hero._id}}</td>\n                    <td>{{hero.name}}</td>\n                    <td><button class=\"btn btn-danger\" (click)=\"deleteHero(hero, $event)\">Delete</button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div *ngIf=\"selectedHero\">\n            <h2>\n                {{selectedHero.name | uppercase}} is my hero\n            </h2>\n            <button class=\"btn btn-primary\" (click)=\"gotoDetail()\">View Details</button>\n            <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'small'\"></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./app/components/heroes/heroes.component.ts":
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
var hero_service_1 = __webpack_require__("./app/services/hero.service.ts");
var router_1 = __webpack_require__("../node_modules/@angular/router/esm5/router.js");
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero._id]);
    };
    HeroesComponent.prototype.addHero = function () {
        this.selectedHero = null;
        this.router.navigate(['/detail', 'new']);
    };
    HeroesComponent.prototype.deleteHero = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: __webpack_require__("./app/components/heroes/heroes.component.html")
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;


/***/ }),

/***/ "./app/components/heroes/heroes.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var heroes_component_1 = __webpack_require__("./app/components/heroes/heroes.component.ts");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var share_module_1 = __webpack_require__("./app/components/share/share.module.ts");
var router_1 = __webpack_require__("../node_modules/@angular/router/esm5/router.js");
var HeroesModule = (function () {
    function HeroesModule() {
    }
    return HeroesModule;
}());
HeroesModule = __decorate([
    core_1.NgModule({
        imports: [
            share_module_1.ShareModule,
            router_1.RouterModule.forChild([{
                    path: '',
                    component: heroes_component_1.HeroesComponent
                }])
        ],
        declarations: [
            heroes_component_1.HeroesComponent
        ]
    })
], HeroesModule);
exports.HeroesModule = HeroesModule;


/***/ })

});
//# sourceMappingURL=7.module.map