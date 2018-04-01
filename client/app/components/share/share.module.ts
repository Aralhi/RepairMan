import {SearchComponent} from './components/search.component';
import { UtilService } from './services/util.service';
import {OrderService} from '../../services/order.service';
import { CustomerService } from './../../services/customer.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './components/customer-detail.component';
import { WsOptionComponent } from './components/ws-option.component';
import { StaffService } from '../../services/staff.service';
import { MaterialDetailComponent } from './components/material-detail.component';
import { MaterialService } from '../../services/material.service';
import { VendorService } from '../../services/vendor.service';
import { StorageService } from '../../services/storage.service';
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
    SearchComponent,
    MaterialDetailComponent
  ],
  declarations: [
    CustomerDetailComponent,
    WsOptionComponent,
    SearchComponent,
    MaterialDetailComponent
  ],
  providers: [
    CustomerService,
    OrderService,
    UtilService,
    StaffService,
    MaterialService,
    VendorService,
    StorageService
  ]
})
export class ShareModule {}
