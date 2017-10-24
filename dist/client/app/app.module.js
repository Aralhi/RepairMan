"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var heroes_component_1 = require("./components/heroes/heroes.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var hero_service_1 = require("./services/hero.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            heroes_component_1.HeroesComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent
        ],
        providers: [
            hero_service_1.HeroService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQThDO0FBQzlDLDhEQUEwRDtBQUMxRCx3Q0FBZ0Q7QUFDaEQsc0NBQStDO0FBRS9DLGlEQUFnRDtBQUNoRCw2Q0FBOEM7QUFFOUMseUVBQTRFO0FBQzVFLGtGQUFrRjtBQUNsRix1RkFBcUY7QUFFckYsd0RBQXVEO0FBb0J2RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLFNBQVM7SUFsQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGdDQUFhO1lBQ2IsaUJBQVU7WUFDVixtQkFBVztZQUNYLHFCQUFPO1NBQ047UUFDSCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLGtDQUFlO1lBQ2Ysd0NBQWtCO1lBQ2xCLDJDQUFtQjtTQUNwQjtRQUNELFNBQVMsRUFBRTtZQUNULDBCQUFXO1NBQ1o7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9ICAgICBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByb3V0aW5nIH0gICAgICAgZnJvbSAnLi9hcHAucm91dGluZyc7XG5cbmltcG9ydCB7IEhlcm9lc0NvbXBvbmVudCB9ICAgICAgZnJvbSAnLi9jb21wb25lbnRzL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEhlcm9EZXRhaWxDb21wb25lbnQgfSAgZnJvbSAnLi9jb21wb25lbnRzL2hlcm9EZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSAgZnJvbSAnLi9zZXJ2aWNlcy9oZXJvLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIHJvdXRpbmdcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSGVyb2VzQ29tcG9uZW50LFxuICAgIERhc2hib2FyZENvbXBvbmVudCxcbiAgICBIZXJvRGV0YWlsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEhlcm9TZXJ2aWNlXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
