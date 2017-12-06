import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  customers: any = [];
  pageSize: number = 10;
  searchText:string = '';
  showCreate: boolean = false;
  newCustomer: any = {
    name: '',
    carNumber: '',
    phone: '',
    carType: '',
    company: '',
    remark: ''
  };

  constructor(private customerService: CustomerService,
              private _notification: NzNotificationService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  delete(id: string, name: string) {
    this.customerService.delete(id).subscribe(res => {
      if (res.status === 'success') {
        this._notification.create('success', res.msg, `${name}删除成功`);
        this.customerService.getCustomers().subscribe(customers => this.customers = customers);
      } else {
        this._notification.create('error', res.msg, `${name}删除失败`);
      }
    });
  }

  search() {
    console.info(this.searchText);
  }
}
