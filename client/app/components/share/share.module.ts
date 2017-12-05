import { CustomerService } from './../../services/customer.service';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../../services/hero.service";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  exports: [CommonModule, HttpModule, FormsModule, NgZorroAntdModule],
  providers: [
    HeroService,
    CustomerService
  ]
})
export class ShareModule {}
