import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './custom.strategy';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'order',
    loadChildren: './components/order/order.module#OrderModule'
  },
  {
    path: 'dispatch',
    loadChildren: './components/dispatch/dispatch.module#DispathcModule'
  },
  {
    path: 'storage',
    loadChildren: './components/storage/storage.module#StorageModule'
  },
  {
    path: 'customer',
    loadChildren: './components/customer/customer.module#CustomerModule'
  },
  {
    path: 'staff',
    loadChildren: './components/staff/staff.module#StaffModule'
  },
  {
    path: 'material',
    loadChildren: './components/material/material.module#MaterialModule'
  },
  {
    path: 'vendor',
    loadChildren: './components/vendor/vendor.module#VendorModule'
  },
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRouterModule {}
