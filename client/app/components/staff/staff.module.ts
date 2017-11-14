import { StaffComponent } from './staff.component';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: StaffComponent
      }
    ])
  ],
  declarations: [
    StaffComponent
  ]
})
export class StaffModule {

}
