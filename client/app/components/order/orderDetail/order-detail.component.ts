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
  ngOnInit(){
    this.order = {
      repairItems: [{
        repairName: '',
        repairCode: '',
        staff: '',
        cost: 0
      }, {
        repairName: '1',
        repairCode: '2',
        staff: '',
        cost: 0
      }]
    };
  }
}
