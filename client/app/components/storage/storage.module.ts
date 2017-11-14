import { StorageComponent } from './storage.component';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: StorageComponent
      }
    ])
  ],
  declarations: [
    StorageComponent
  ]
})
export class StorageModule {

}
