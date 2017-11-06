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
    path: 'detail/:id',
    loadChildren: './components/heroDetail/hero-detail.module#HeroDetailModule'
  },
  {
    path: 'heroes',
    loadChildren: './components/heroes/heroes.module#HeroesModule'
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
