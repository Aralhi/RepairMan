import { OrderService } from './../../../services/order.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'order-list',
  templateUrl: 'order.list.component.html'
})
export class OrderListComponent implements OnInit{
  orders: any = [];
  pageSize: number = 10;
  status: string = 'all';
  searchText: string = '';

  constructor(private orderService: OrderService,
              private _notification: NzNotificationService,
              private confirmServ: NzModalService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(res => {
      if (res.status === 'success') {
        this.orders = res.result;
      }
    });
  }

  delete(id: string, name: string) {
    let that = this;
    this.confirmServ.confirm({
      title  : `您是否确认要删除${name}`,
      content: '',
      onOk() {
        that.orderService.delete(id).subscribe(res => {
          if (res.status === 'success') {
            that._notification.create('success', res.msg, `${name}删除成功`);
            that.orderService.getOrders().subscribe(res => {
              if (res.status === 'success') {
                that.orders = res.result;
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

  edit(order: any) {
    this.router.navigate(['../create', order._id], { relativeTo: this.activatedRoute});
  }

  search() {
    this.orderService.search({
      searchText: this.searchText,
      progress: this.status
    }).subscribe(res => {
      if (res.status === 'success') {
        this.orders = res.result;
      }
    });
  }

  query() {
    console.info(this.searchText);
    this.orderService.search({
      searchText: this.searchText,
      progress: this.status
    }).subscribe(res => {
      if (res.status === 'success') {
        this.orders = res.result;
      }
    });
  }
}
