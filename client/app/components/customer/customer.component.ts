import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { cloneDeepWith } from 'lodash';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit{
  customers: any = [];
  pageSize: number = 10;
  showCreate: boolean = false;
  newCustomer: any = {
    name: '',
    carNumber: '',
    phone: '',
    carType: '',
    company: '',
    remark: ''
  };
  isEditCustomer: boolean = false;

  constructor(private customerService: CustomerService,
              private _notification: NzNotificationService,
              private confirmServ: NzModalService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe(res => {
      if (res.status === 'success') {
        this.customers = res.result;
      }
    });
  }

  delete(id: string, name: string) {
    let that = this;
    this.confirmServ.confirm({
      title  : `您是否确认要删除${name}`,
      content: '',
      onOk() {
        that.customerService.delete(id).subscribe(res => {
          if (res.status === 'success') {
            that._notification.create('success', res.msg, `${name}删除成功`);
            that.customerService.getCustomers().subscribe(res => {
              if (res.status === 'success') {
                that.customers = res.result;
              }
            });
          } else {
            that._notification.create('error', res.msg, `${name}删除失败`);
          }
        });
      },
      onCancel() {
      }
    });
  }

  add() {
    this.customerService.save(this.newCustomer).subscribe(res => {
      if (res.status === 'success') {
        this.showCreate = false;
        this._notification.create('success', res.msg, `${name}保存成功`);
        this.newCustomer = {
          name: '',
          carNumber: '',
          phone: '',
          carType: '',
          company: '',
          remark: ''
        };
        this.customerService.getCustomers().subscribe(res => {
          if (res.status === 'success') {
            this.customers = res.result;
          }
        });
      } else {
        this._notification.create('error', res.msg, `${name}保存失败`);
      }
    });
  }

  edit(customer: any) {
    this.newCustomer = cloneDeepWith(customer);
    this.showCreate = true;
    this.isEditCustomer = true;
  }

  customerChange(event) {
    this.newCustomer = event;
  }

  search(searchText: string) {
    this.customerService.search(searchText).subscribe(res => {
      if (res.status === 'success') {
        this.customers = res.result;
      }
    });
  }
}
