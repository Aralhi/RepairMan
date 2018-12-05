import { Component } from '@angular/core';
import { OrderService } from './../../services/order.service';
import { StaffService } from './../../services/staff.service';

@Component({
  selector: 'dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent {
  searchText: string = '';
  orders: any = [];
  pageSize: number = 10;
  status: string = 'all';
  groups: any = ['all'];
  group: string = this.groups[0];

  constructor(private orderService: OrderService,
              private staffService: StaffService) {}

  ngOnInit() {
    this.staffService.getStaffs().subscribe(res => {
      if (res.status === 'success') {
        this.groups = [].concat((res.result || []).map(i => i.group));
      }
    });
    this.orderService.search({
      searchText: this.searchText,
      progress: this.status,
      group: this.group
    }).subscribe(res => {
      if (res.status === 'success') {
        this.orders = res.result;
      }
    });
  }

  search(event) {
    this.orderService.search({
      searchText: this.searchText,
      progress: this.status,
      group: this.group || 'all'
    }).subscribe(res => {
      if (res.status === 'success') {
        this.orders = res.result;
      }
    });
  }

  changeGroup(event: any) {
    this.orderService.search({
      searchText: this.searchText,
      progress: this.status,
      group: event
    }).subscribe(res => {
      if (res.status === 'success') {
        this.orders = res.result;
      }
    });
  }

  query() {
    this.orderService.search({
      searchText: this.searchText,
      progress: this.status,
      group: this.group || 'all'
    }).subscribe(res => {
      if (res.status === 'success') {
        this.orders = res.result;
      }
    });
  }
}
