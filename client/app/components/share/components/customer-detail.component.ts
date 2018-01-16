import { UtilService } from './../services/util.service';
import { Component, Input } from '@angular/core';
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
        <nz-input *ngIf="isCreate" [(ngModel)]="customerObj.name"></nz-input>
      </div>
      <span class="common-label">车牌号:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="customerObj.carNumber"></nz-input>
      </div>
      <span class="common-label">车型:</span>
      <div class="col-md-3">
        <nz-input [(ngModel)]="customerObj.phone"></nz-input>
      </div>
    </div>
    <div class="row">
      <span class="common-label">单位:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="customerObj.carType"></nz-input>
      </div>
      <span class="common-label">电话:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="customerObj.company"></nz-input>
      </div>
      <span class="common-label">备注:</span>
      <div class="col-md-3">
        <nz-input [(ngModel)]="customerObj.remark"></nz-input>
      </div>
    </div>
  `
})
export class CustomerDetailComponent implements OnInit {
  @Input() customerObj: any;
  @Input() order: any;
  customers: any = [];
  @Input() isCreate: boolean = false;

  constructor(private customerService: CustomerService,
    private utilService: UtilService) {}

  ngOnInit() {
    console.log(this.customerObj);
    this.customerService.getCustomers().subscribe(resp => {
      if (resp.status === 'success') {
        this.customers = resp.result;
      }
    });
  }

  changeCustomer(customer: any) {
    if (!customer) {
      this.customerObj = this.utilService.getCustomerModel();
      return;
    }
    this.customerObj = customer;
    this.order.customer = customer;
  }
}
