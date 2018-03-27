import { Customer } from './../../../models/customer';
import { UtilService } from './../services/util.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'customer-detail',
  template: `
    <div class="row">
      <span class="common-label">姓名:</span>
      <div class="col-md-3 mr-20">
        <nz-select *ngIf="!isCreate"
          style="width: 100%;"
          nzAllowClear
          [nzPlaceHolder]="'选择用户'"
          [(ngModel)]="customerObj"
          (ngModelChange)="changeCustomer($event)"
          [nzShowSearch]="true">
          <nz-option
            *ngFor="let option of customers"
            [nzLabel]="option.name"
            [nzValue]="option">
          </nz-option>
        </nz-select>
        <nz-input *ngIf="isCreate" [(ngModel)]="customerObj.name" (ngModelChange)="change()"></nz-input>
      </div>
      <span class="common-label">车牌号:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="customerObj.carNumber" (ngModelChange)="change()"></nz-input>
      </div>
      <span class="common-label">车型:</span>
      <div class="col-md-3">
        <nz-input [(ngModel)]="customerObj.carType" (ngModelChange)="change()"></nz-input>
      </div>
    </div>
    <div class="row">
      <span class="common-label">单位:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="customerObj.company" (ngModelChange)="change()"></nz-input>
      </div>
      <span class="common-label">电话:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="customerObj.phone" (ngModelChange)="change()"></nz-input>
      </div>
      <span class="common-label">备注:</span>
      <div class="col-md-3">
        <nz-input [(ngModel)]="customerObj.remark" (ngModelChange)="change()"></nz-input>
      </div>
    </div>
  `
})
export class CustomerDetailComponent implements OnInit {
  @Input() customerObj: any;
  @Input() order: any;
  customers: any = [];
  @Input() isCreate: boolean = false;
  @Output() customerChange: EventEmitter<Customer> = new EventEmitter();
  constructor(private customerService: CustomerService,
    private utilService: UtilService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe(resp => {
      if (resp.status === 'success') {
        this.customers = resp.result;
        this.customerObj = !this.customerObj.name ? this.customerObj : this.customers.find(item => item.name === this.customerObj.name);
      }
    });
  }

  changeCustomer(customer: any) {
    if (!customer) {
      this.customerObj = this.utilService.getCustomerModel();
      this.customerChange.emit(this.customerObj);
      return;
    }
    this.customerObj = customer;
    this.order.customer = customer;
    this.customerChange.emit(this.customerObj);
  }

  change() {
    this.customerChange.emit(this.customerObj);
  }
}
