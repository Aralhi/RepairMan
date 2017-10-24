"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var heroes_component_1 = require("./components/heroes/heroes.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF1RDtBQUV2RCxrRkFBa0Y7QUFDbEYseUVBQTRFO0FBQzVFLHVGQUFxRjtBQUVyRixJQUFNLFNBQVMsR0FBVztJQUN4QjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLFlBQVk7UUFDeEIsU0FBUyxFQUFFLE1BQU07S0FDbEI7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7S0FDOUI7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSwyQ0FBbUI7S0FDL0I7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO0tBQzNCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAucm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb2VzQ29tcG9uZW50IH0gICAgICBmcm9tICcuL2NvbXBvbmVudHMvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9ICBmcm9tICcuL2NvbXBvbmVudHMvaGVyb0RldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICcvZGFzaGJvYXJkJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2Rhc2hib2FyZCcsXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdkZXRhaWwvOmlkJyxcbiAgICBjb21wb25lbnQ6IEhlcm9EZXRhaWxDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdoZXJvZXMnLFxuICAgIGNvbXBvbmVudDogSGVyb2VzQ29tcG9uZW50XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzLCB7IHVzZUhhc2g6IHRydWUgfSk7XG4iXX0=
