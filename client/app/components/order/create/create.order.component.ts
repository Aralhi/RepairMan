import { OrderService } from '../../../services/order.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'create-order',
  templateUrl: './create.order.component.html',
  styleUrls: ['./create.order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order: any = {};
  orderId: string = '';

  constructor(private orderService: OrderService,
    private _notification: NzNotificationService,
    private confirmServ: NzModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initOrder();
    this.route.params
      .subscribe(params => {
        this.orderId = params['id'];
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
      no: new Date().getTime(),
      subject: '',
      customer: {
        name: '',
        carNumber: '',
        phone: '',
        carType: '',
        company: '',
        remark: ''
      },
      repairSubjects: [
        {
          name: '',
          code: '',
          staff: '',
          cost: 0,
          costUnit: '元'
        }
      ],
      repairMaterials: [
        {
          name: '',
          code: '',
          spec: '',
          count: 0,
          costUnit: '元',
          outPrice: 0,
          unit: ''
        }
      ]
    };
  }

  add() {
    this.orderService.save(this.order).subscribe(res => {
      if (res.status === 'success') {
        this._notification.create('success', res.msg, `${name}保存成功`);
        this.router.navigate(['../list'], { relativeTo: this.route });
      } else {
        this._notification.create('error', res.msg, `${name}保存失败`);
      }
    });
  }
}
