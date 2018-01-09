webpackJsonp([0],{

/***/ "../node_modules/css-loader/index.js!./app/components/order/create/create.order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".create-order-page{\n  padding-top: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!./app/components/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".order-page{\n  padding-top: 50px;\n  font-size: 14px;\n}\n.create-btn{\n  background-color: #28a745;\n  color: #ffffff;\n  padding: 3px 10px;\n  font-size: 12px;\n  line-height: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!./app/components/order/orderDetail/order-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".order-title {\n  width: 70%;\n  margin: 0 auto;\n}\n.order-title span {\n  display: inline-block;\n  width: 5%;\n  height: 30px;\n  line-height: 30px;\n}\n.common-card{\n  padding: 20px 35px;\n  border: 1px solid #ccc;\n  clear: both;\n  margin-top: 20px;\n  position: relative;\n}\n.table-content{\n  padding-top: 5px;\n}\n.table-content .item{\n  height: 35px;\n}", ""]);

// exports


/***/ }),

/***/ "./app/components/order/create/create.order.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js!./app/components/order/create/create.order.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/order/create/create.order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"create-order-page display-center\">\n  <order-detail [order]=\"order\"></order-detail>\n  <button class=\"common-btn\" style=\"margin-top:20px;\" nz-button [nzType]=\"'primary'\" (click)=\"add()\">\n    <span>保存</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "./app/components/order/create/create.order.component.ts":
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
var order_service_1 = __webpack_require__("./app/services/order.service.ts");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var ng_zorro_antd_1 = __webpack_require__("../node_modules/ng-zorro-antd/esm5/antd.js");
var router_1 = __webpack_require__("../node_modules/@angular/router/esm5/router.js");
var CreateOrderComponent = (function () {
    function CreateOrderComponent(orderService, _notification, confirmServ, router, route) {
        this.orderService = orderService;
        this._notification = _notification;
        this.confirmServ = confirmServ;
        this.router = router;
        this.route = route;
        this.order = {};
        this.orderId = '';
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initOrder();
        this.route.params
            .subscribe(function (params) {
            _this.orderId = params['id'];
            _this.orderService.getOrder(_this.orderId).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.order = res.result;
                }
            });
            return null;
        });
    };
    CreateOrderComponent.prototype.initOrder = function () {
        this.order = {
            name: '',
            no: new Date().getTime(),
            subject: '',
            customer: {
                name: '',
                carNumber: '',
                phone: '',
                carType: '',
                company: '',
                remark: ''
            },
            repairSubjects: [
                {
                    name: '',
                    code: '',
                    staff: '',
                    cost: 0,
                    costUnit: '元'
                }
            ],
            repairMaterials: [
                {
                    name: '',
                    code: '',
                    spec: '',
                    count: 0,
                    costUnit: '元',
                    outPrice: 0,
                    unit: ''
                }
            ]
        };
    };
    CreateOrderComponent.prototype.add = function () {
        var _this = this;
        this.orderService.save(this.order).subscribe(function (res) {
            if (res.status === 'success') {
                _this._notification.create('success', res.msg, name + "\u4FDD\u5B58\u6210\u529F");
                _this.router.navigate(['../list'], { relativeTo: _this.route });
            }
            else {
                _this._notification.create('error', res.msg, name + "\u4FDD\u5B58\u5931\u8D25");
            }
        });
    };
    return CreateOrderComponent;
}());
CreateOrderComponent = __decorate([
    core_1.Component({
        selector: 'create-order',
        template: __webpack_require__("./app/components/order/create/create.order.component.html"),
        styles: [__webpack_require__("./app/components/order/create/create.order.component.css")]
    }),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        ng_zorro_antd_1.NzNotificationService,
        ng_zorro_antd_1.NzModalService,
        router_1.Router,
        router_1.ActivatedRoute])
], CreateOrderComponent);
exports.CreateOrderComponent = CreateOrderComponent;


/***/ }),

/***/ "./app/components/order/list/order.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container page-container\">\n  <button nz-button [nzType]=\"'primary'\" routerLink=\"../create\">\n    <span>创建工单</span>\n  </button>\n  <nz-table #nzTable [nzDataSource]=\"orders\" [nzPageSize]=\"pageSize\">\n    <thead nz-thead>\n      <tr>\n        <th nz-th><span>单号</span></th>\n        <th nz-th><span>名称</span></th>\n        <th nz-th><span>类型</span></th>\n        <th nz-th><span>客户</span></th>\n        <th nz-th><span>车型</span></th>\n        <th nz-th class=\"col-md-2\"><span>车牌号</span></th>\n        <th nz-th><span>操作</span></th>\n      </tr>\n    </thead>\n    <tbody nz-tbody>\n      <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\n        <td nz-td>{{data.no}}</td>\n        <td nz-td>{{data.name}}</td>\n        <td nz-td>{{data.subject}}</td>\n        <td nz-td>{{data.customer.name}}</td>\n        <td nz-td>{{data.customer.carType}}</td>\n        <td nz-td>{{data.customer.carNumber}}</td>\n        <td nz-td>\n          <span>\n            <a (click)=\"edit(data)\">编辑</a>\n            <span nz-table-divider></span>\n            <a (click)=\"delete(data._id, data.name)\">删除</a>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./app/components/order/list/order.list.component.ts":
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
var order_service_1 = __webpack_require__("./app/services/order.service.ts");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var ng_zorro_antd_1 = __webpack_require__("../node_modules/ng-zorro-antd/esm5/antd.js");
var router_1 = __webpack_require__("../node_modules/@angular/router/esm5/router.js");
var OrderListComponent = (function () {
    function OrderListComponent(orderService, _notification, confirmServ, router, activatedRoute) {
        this.orderService = orderService;
        this._notification = _notification;
        this.confirmServ = confirmServ;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.orders = [];
        this.pageSize = 10;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (res) {
            if (res.status === 'success') {
                _this.orders = res.result;
            }
        });
    };
    OrderListComponent.prototype.delete = function (id, name) {
        var that = this;
        this.confirmServ.confirm({
            title: "\u60A8\u662F\u5426\u786E\u8BA4\u8981\u5220\u9664" + name,
            content: '',
            onOk: function () {
                that.orderService.delete(id).subscribe(function (res) {
                    if (res.status === 'success') {
                        that._notification.create('success', res.msg, name + "\u5220\u9664\u6210\u529F");
                        that.orderService.getOrders().subscribe(function (res) {
                            if (res.status === 'success') {
                                that.orders = res.result;
                            }
                        });
                    }
                    else {
                        that._notification.create('error', res.msg, name + "\u5220\u9664\u5931\u8D25");
                    }
                });
            },
            onCancel: function () {
            }
        });
    };
    OrderListComponent.prototype.edit = function (order) {
        this.router.navigate(['../create', order._id], { relativeTo: this.activatedRoute });
    };
    return OrderListComponent;
}());
OrderListComponent = __decorate([
    core_1.Component({
        selector: 'order-list',
        template: __webpack_require__("./app/components/order/list/order.list.component.html")
    }),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        ng_zorro_antd_1.NzNotificationService,
        ng_zorro_antd_1.NzModalService,
        router_1.Router,
        router_1.ActivatedRoute])
], OrderListComponent);
exports.OrderListComponent = OrderListComponent;


/***/ }),

/***/ "./app/components/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js!./app/components/order/order.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- <order-detail></order-detail> -->\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./app/components/order/order.component.ts":
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
var core_2 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var OrderComponent = (function () {
    function OrderComponent() {
    }
    return OrderComponent;
}());
OrderComponent = __decorate([
    core_1.Component({
        selector: 'repair-order',
        template: __webpack_require__("./app/components/order/order.component.html"),
        styles: [__webpack_require__("./app/components/order/order.component.css")],
        encapsulation: core_2.ViewEncapsulation.None
    })
], OrderComponent);
exports.OrderComponent = OrderComponent;


/***/ }),

/***/ "./app/components/order/order.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_list_component_1 = __webpack_require__("./app/components/order/list/order.list.component.ts");
var order_detail_component_1 = __webpack_require__("./app/components/order/orderDetail/order-detail.component.ts");
var order_component_1 = __webpack_require__("./app/components/order/order.component.ts");
var share_module_1 = __webpack_require__("./app/components/share/share.module.ts");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("../node_modules/@angular/router/esm5/router.js");
var create_order_component_1 = __webpack_require__("./app/components/order/create/create.order.component.ts");
var OrderModule = (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule = __decorate([
    core_1.NgModule({
        imports: [
            share_module_1.ShareModule,
            router_1.RouterModule.forChild([{
                    path: '',
                    redirectTo: '/order/list',
                    pathMatch: 'full'
                }, {
                    path: '',
                    component: order_component_1.OrderComponent,
                    children: [{
                            path: 'list',
                            component: order_list_component_1.OrderListComponent
                        }, {
                            path: 'create',
                            children: [{
                                    path: '',
                                    component: create_order_component_1.CreateOrderComponent
                                }, {
                                    path: ':id',
                                    component: create_order_component_1.CreateOrderComponent
                                }]
                        }]
                }
            ])
        ],
        exports: [],
        declarations: [
            order_component_1.OrderComponent,
            order_detail_component_1.OrderDetailComponenet,
            create_order_component_1.CreateOrderComponent,
            order_list_component_1.OrderListComponent
        ]
    })
], OrderModule);
exports.OrderModule = OrderModule;


/***/ }),

/***/ "./app/components/order/orderDetail/order-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js!./app/components/order/orderDetail/order-detail.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/order/orderDetail/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"order-title row\">\n  <span>标题:</span>\n  <nz-input style=\"width: 94%\" [(ngModel)]=\"order.name\" [nzPlaceHolder]=\"'简答描述下维修单'\"></nz-input>\n</div>\n<!--车辆信息-->\n<div class=\"common-card\">\n  <span class=\"card-label-pos\">车辆信息</span>\n  <customer-detail [isCreate]=\"false\" [customerObj]=\"order.customer\"></customer-detail>\n</div>\n<!--工单信息-->\n<div class=\"common-card\">\n  <span class=\"card-label-pos\">工单信息</span>\n  <div class=\"row\">\n    <span class=\"common-label\">单号:</span>\n    <div class=\"col-md-3 mr-20\">\n      <nz-input [(ngModel)]=\"order.no\"></nz-input>\n    </div>\n    <span class=\"common-label\">科目:</span>\n    <div class=\"col-md-3 mr-20\">\n      <nz-select style=\"width: 100%;\" [(ngModel)]=\"order.subject\" [nzDisabled]=\"false\" nzAllowClear>\n        <nz-option\n          *ngFor=\"let option of subjects\"\n          [nzLabel]=\"option.label\"\n          [nzValue]=\"option.value\">\n        </nz-option>\n      </nz-select>\n    </div>\n    <span class=\"common-label\">派工日期:</span>\n    <div class=\"col-md-3\">\n      <nz-datepicker style=\"width: 50%;\" [(ngModel)]=\"_date\" [nzPlaceHolder]=\"'Select date'\"></nz-datepicker>\n      <nz-timepicker style=\"width: 50%;\" [(ngModel)]=\"_date\"></nz-timepicker>\n    </div>\n  </div>\n  <!--维修项目-->\n  <div class=\"row\">\n    <div class=\"common-table-head\">\n      <div class=\"col-md-1\">序号</div>\n      <div class=\"col-md-2\">项目名称</div>\n      <div class=\"col-md-2\">项目编码</div>\n      <div class=\"col-md-2\">施工人</div>\n      <div class=\"col-md-2\">工时费</div>\n      <div class=\"col-md-2\">计量单位</div>\n    </div>\n    <div class=\"table-content\">\n      <div class=\"item\" *ngFor=\"let item of order.repairSubjects;let index = index;\">\n        <div class=\"col-md-1\" style=\"height: 30px;line-height: 30px;\">{{index+1}}</div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.name\"></nz-input></div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.code\"></nz-input></div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.staff\"></nz-input></div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.cost\"></nz-input></div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.costUnit\" [nzDisabled]=\"true\"></nz-input></div>\n      </div>\n    </div>\n  </div>\n  <!--使用物料-->\n  <div class=\"row\">\n    <div class=\"common-table-head\">\n      <div class=\"col-md-1\">序号</div>\n      <div class=\"col-md-2\">商品名称</div>\n      <div class=\"col-md-2\">商品编码</div>\n      <div class=\"col-md-2\">商品规格</div>\n      <div class=\"col-md-2\">数量</div>\n      <div class=\"col-md-2\">出库金额</div>\n      <div class=\"col-md-1\">计量单位</div>\n    </div>\n    <div class=\"table-content\">\n      <div class=\"item\" *ngFor=\"let item of order.repairMaterials;let index = index;\">\n        <div class=\"col-md-1\" style=\"height: 30px;line-height: 30px;\">{{index+1}}</div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.name\"></nz-input></div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.code\"></nz-input></div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.spec\"></nz-input></div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.count\"></nz-input></div>\n        <div class=\"col-md-2\"><nz-input [(ngModel)]=\"item.outPrice\"></nz-input></div>\n        <div class=\"col-md-1\"><nz-input [(ngModel)]=\"item.unit\" [nzDisabled]=\"true\"></nz-input></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./app/components/order/orderDetail/order-detail.component.ts":
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
var OrderDetailComponenet = (function () {
    function OrderDetailComponenet() {
        this.subjects = [
            {
                label: '保养',
                value: '保养'
            }
        ];
        this.order = {};
    }
    OrderDetailComponenet.prototype.ngOnInit = function () {
    };
    return OrderDetailComponenet;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OrderDetailComponenet.prototype, "order", void 0);
OrderDetailComponenet = __decorate([
    core_1.Component({
        selector: 'order-detail',
        template: __webpack_require__("./app/components/order/orderDetail/order-detail.component.html"),
        styles: [__webpack_require__("./app/components/order/orderDetail/order-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderDetailComponenet);
exports.OrderDetailComponenet = OrderDetailComponenet;


/***/ })

});
//# sourceMappingURL=0.module.map