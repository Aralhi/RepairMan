import { NgModule } from '@angular/core';
import { ShareModule } from './../share/share.module';
import { RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: VendorComponent
      }
    ])
  ],
  declarations: [
    VendorComponent
  ]
})
export class VendorModule {

}
