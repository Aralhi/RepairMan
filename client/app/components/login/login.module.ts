import { LoginComponent } from './login.component';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ],
  exports: [],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {

}
