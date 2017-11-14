import { DispatchComponent } from './dispatch.component';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: DispatchComponent
      }
    ])
  ],
  declarations: [
    DispatchComponent
  ]
})
export class DispathcModule {

}