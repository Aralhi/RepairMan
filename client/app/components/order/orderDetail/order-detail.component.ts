import { CustomerService } from './../../../services/customer.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponenet implements OnInit{
  subjects: any = [{
    label: '保养', value: '保养'
  }];
  order: any = {};
  customers: any = [];

  constructor(private customerService: CustomerService) {

  }
  ngOnInit(){
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
    this.order = {
      repairSubjects: [{
        name: '检查电路',
        code: '',
        staff: '张三',
        cost: 0,
        costUnit: '元'
      }, {
        name: '更换机油',
        code: '2',
        staff: '李四',
        cost: 0,
        costUnit: '元'
      }],
      repairMaterials: [{
        name: '机油滤芯',
        code: '',
        spec: '50L',
        count: 1,
        costUnit: '元',
        outPrice: 20,
        unit: '个'
      }, {
        name: '螺丝',
        code: '',
        spec: '50L',
        count: 1,
        costUnit: '元',
        outPrice: 20,
        unit: '个'
      }]
    };
  }
}
