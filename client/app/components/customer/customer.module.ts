import { CustomerComponent } from './customer.component';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerComponent
      }
    ])
  ],
  declarations: [
    CustomerComponent
  ]
})
export class CustomerModule {

}
