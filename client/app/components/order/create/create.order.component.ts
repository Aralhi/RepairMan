import { MaterialService } from './../../../services/material.service';
import { UtilService } from './../../share/services/util.service';
import { CustomerService } from '../../../services/customer.service';
import { OrderService } from '../../../services/order.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';

@Component({
  selector: 'create-order',
  templateUrl: './create.order.component.html',
  styleUrls: ['./create.order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order: any = {};
  orderId: string = '';

  constructor(private orderService: OrderService,
    private customerService: CustomerService,
    private materialService: MaterialService,
    private utilService: UtilService,
    private _notification: NzNotificationService,
    private confirmServ: NzModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.orderId = params['id'];
        if (!this.orderId) {
          this.initOrder();
          return;
        }
        this.orderService.getOrder(this.orderId).subscribe(res => {
          if (res.status === 'success') {
            this.order = res.result;
          }
        });
        return null;
      });
  }

  initOrder() {
    this.order = {
      name: '',
      no: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
      subject: '',
      customer: this.utilService.getCustomerModel(),
      status: '新建',
      progress: 0,
      repairSubjects: [
        {
          id: 0,
          name: '',
          code: '',
          staff: '',
          cost: 0,
          costUnit: '元'
        }
      ],
      subjectsCost: 0,
      materialsCost: 0,
      orderCost: 0,
      assignStaffs: [],
      assignDate: undefined,
      repairMaterials: [
        {
          id: 0,
          name: '',
          carType: '',
          materialCount: 0,
          count: 0,
          costUnit: '元',
          outPrice: 0,
          unit: ''
        }
      ]
    };
  }

  add() {
    if (this.order.isCreateCustomer) {
      // 保存用户
      this.customerService.save(this.order.customer).subscribe(res => {
        if (res.status === 'success') {
          this._notification.create('success', `客户${name}保存成功`, res.msg);
          this.order.customer._id = res.id;
          this.saveOrder();
        } else {
          this._notification.create('error', `维修单${name}保存失败`, res.msg);
        }
      });
    } else {
      this.saveOrder();
    }
  }

  saveOrder() {
    this.orderService.save(this.order).subscribe(res => {
      if (res.status === 'success') {
        const repairMaterials = this.order.repairMaterials;
        if (this.order.progress === 2 && repairMaterials && repairMaterials.length > 0) {
          for (let item of repairMaterials) {
            this.materialService.updateCount({
              _id: item._id,
              key: 'count',
              value: item.materialCount - item.count
            }).subscribe(res => {
              console.log(res);
            });
          }
        }
        this._notification.create('success', res.msg, `${name}保存成功`);
        this.router.navigate(['../../list'], { relativeTo: this.route });
      } else {
        this._notification.create('error', res.msg, `${name}保存失败`);
      }
    });
  }
}
