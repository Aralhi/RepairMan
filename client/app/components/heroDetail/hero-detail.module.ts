import { HeroDetailComponent } from './hero-detail.component';
import { NgModule } from '@angular/core';
import { ShareModule } from './../share/share.module';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([{
      path: '',
      component: HeroDetailComponent
    }])
  ],
  declarations: [
    HeroDetailComponent
  ]
})
export class HeroDetailModule{

}
