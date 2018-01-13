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
    WsOptionComponent
  ],
  declarations: [
    CustomerDetailComponent,
    WsOptionComponent
  ],
  providers: [
    HeroService,
    CustomerService,
    OrderService,
    UtilService
  ]
})
export class ShareModule {}
