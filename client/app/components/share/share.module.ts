import {SearchComponent} from './components/search.component';
import { UtilService } from './services/util.service';
import {OrderService} from '../../services/order.service';
import { CustomerService } from './../../services/customer.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './components/customer-detail.component';
import { WsOptionComponent } from './components/ws-option.component';
import { StaffService } from '../../services/staff.service';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    NgZorroAntdModule,
    CustomerDetailComponent,
    WsOptionComponent,
    SearchComponent
  ],
  declarations: [
    CustomerDetailComponent,
    WsOptionComponent,
    SearchComponent
  ],
  providers: [
    HeroService,
    CustomerService,
    OrderService,
    UtilService,
    StaffService
  ]
})
export class ShareModule {}
