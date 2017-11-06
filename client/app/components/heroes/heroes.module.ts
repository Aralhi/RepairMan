import { HeroesComponent } from './heroes.component';
import { NgModule } from '@angular/core';
import { ShareModule } from './../share/share.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([{
      path: '',
      component: HeroesComponent
    }])
  ],
  declarations: [
    HeroesComponent
  ]
})
export class HeroesModule{

}
