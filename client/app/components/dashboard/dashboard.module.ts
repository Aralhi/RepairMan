import { ShareModule } from './../share/share.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
