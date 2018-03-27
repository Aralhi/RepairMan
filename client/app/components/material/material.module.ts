import { NgModule } from '@angular/core';
import { MaterialComponent } from './material.component';
import { ShareModule } from './../share/share.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: MaterialComponent
      }
    ])
  ],
  declarations: [
    MaterialComponent
  ]
})
export class MaterialModule {

}
