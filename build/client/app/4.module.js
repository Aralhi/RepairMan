webpackJsonp([4],{

/***/ "../node_modules/css-loader/index.js!./app/components/dispatch/dispatch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./app/components/dispatch/dispatch.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js!./app/components/dispatch/dispatch.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/dispatch/dispatch.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/components/dispatch/dispatch.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var DispatchComponent = (function () {
    function DispatchComponent() {
    }
    return DispatchComponent;
}());
DispatchComponent = __decorate([
    core_1.Component({
        selector: 'dispatch',
        template: __webpack_require__("./app/components/dispatch/dispatch.component.html"),
        styles: [__webpack_require__("./app/components/dispatch/dispatch.component.css")]
    })
], DispatchComponent);
exports.DispatchComponent = DispatchComponent;


/***/ }),

/***/ "./app/components/dispatch/dispatch.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dispatch_component_1 = __webpack_require__("./app/components/dispatch/dispatch.component.ts");
var share_module_1 = __webpack_require__("./app/components/share/share.module.ts");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("../node_modules/@angular/router/esm5/router.js");
var DispathcModule = (function () {
    function DispathcModule() {
    }
    return DispathcModule;
}());
DispathcModule = __decorate([
    core_1.NgModule({
        imports: [
            share_module_1.ShareModule,
            router_1.RouterModule.forChild([
                {
                    path: '',
                    component: dispatch_component_1.DispatchComponent
                }
            ])
        ],
        declarations: [
            dispatch_component_1.DispatchComponent
        ]
    })
], DispathcModule);
exports.DispathcModule = DispathcModule;


/***/ })

});
//# sourceMappingURL=4.module.map