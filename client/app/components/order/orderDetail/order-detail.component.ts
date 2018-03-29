import { StaffService } from './../../../services/staff.service';
import { Event } from '@angular/router/src/events';
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../models/customer';
import { MaterialService } from '../../../services/material.service';
@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponenet implements OnInit {
  @Input() order: any = {};
  subjects: any = [
    {
      label: '保养',
      value: '保养'
    }
  ];
  isCreateCustomer: boolean = false;
  staffs: any = [];
  materials: any = [];

  constructor(private staffService: StaffService,
              private materialService: MaterialService) {}
  ngOnInit() {
    this.staffService.getStaffs().subscribe(res => {
      if (res.status === 'success') {
        this.staffs = res.result;
        for (let i = 0; i < this.order.assignStaffs.length; i++) {
          this.order.assignStaffs[i] = this.staffs.find(item => {
            return item._id === this.order.assignStaffs[i]._id;
          });
        }
      }
    });
    this.materialService.getMaterials().subscribe(res => {
      if (res.status === 'success') {
        this.materials = res.result;
      }
    });
  }

  createCustomer(event: any) {
    this.order.isCreateCustomer = event;
  }

  customerChange(event: Customer) {
    this.order.customer = event;
  }

  costChange() {
    let cost = 0;
    this.order.repairSubjects.forEach(item => {
      cost += item.cost;
    });
    this.order.subjectsCost = cost;
    this.order.orderCost = this.order.materialsCost + this.order.subjectsCost;
  }

  outPriceChange() {
    let cost = 0;
    this.order.repairMaterials.forEach(item => {
      cost += item.outPrice;
    });
    this.order.materialsCost = cost;
    this.order.orderCost = this.order.materialsCost + this.order.subjectsCost;
  }

  createSubject(index) {
    this.order.repairSubjects.push({
      id: index,
      name: '',
      code: '',
      staff: '',
      cost: 0,
      costUnit: '元'
    });
  }

  createMaterial(index) {
    this.order.repairMaterials.push({
      _id: '',
      name: '',
      no: '',
      guige: '',
      count: 0,
      costUnit: '元',
      inPrice: 0,
      outPrice: 0,
      unit: ''
    });
  }

  pre() {
    this.order.progress -= 1;
    switch (this.order.progress) {
      case 1:
        this.order.status = '进行中';
        break;
      case 0:
        this.order.status = '新建';
        break;
    }
  }

  next() {
    this.order.progress += 1;
    switch (this.order.progress) {
      case 1:
        this.order.status = '进行中';
        break;
      case 2:
        this.order.status = '完成';
        break;
    }
  }

  changeMaterial(event: any, index: number) {
    let material = this.order.repairMaterials[index];
    const temp = this.materials.find(item => item._id === event);
    // material._id = event._id;
    material.name = temp.name;
    material.no = temp.no;
    material.guige = temp.guige;
    material.inPrice = temp.inPrice;
    material.outPrice = temp.outPrice;
    material.unit = temp.unit;
    material.count = 1;
    this.outPriceChange();
  }

  materialCountChange(event: any, index: number) {
    let material = this.order.repairMaterials[index];
    material.outPrice = event * material.outPrice;
    this.outPriceChange();
  }
}
