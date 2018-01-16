import { CustomerService } from './../../../services/customer.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponenet implements OnInit {
  subjects: any = [
    {
      label: '保养',
      value: '保养'
    }
  ];
  isCreateCustomer: boolean = false;
  @Input() order: any = {};

  constructor() {}
  ngOnInit() {
  }

  createCustomer(event: any) {
    this.order.isCreateCustomer = event;
  }
}
