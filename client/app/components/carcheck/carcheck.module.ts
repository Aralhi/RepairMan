import { CarcheckComponent } from './carcheck.component';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: CarcheckComponent
      }
    ])
  ],
  declarations: [
    CarcheckComponent
  ]
})
export class CarcheckModule {

}
