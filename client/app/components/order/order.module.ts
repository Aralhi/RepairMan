import { OrderListComponent } from './list/order.list.component';
import { OrderDetailComponenet } from './orderDetail/order-detail.component';
import { OrderComponent } from './order.component';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateOrderComponent } from './create/create.order.component';
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([{
      path: '',
      redirectTo: '/order/list',
      pathMatch: 'full'
    }, {
        path: '',
        component: OrderComponent,
        children: [{
          path: 'list',
          component: OrderListComponent
        }, {
          path: 'create',
          children: [{
            path: '',
            component: CreateOrderComponent
          }, {
            path: ':id',
            component: CreateOrderComponent
          }]
        }]
      }
    ])
  ],
  exports: [],
  declarations: [
    OrderComponent,
    OrderDetailComponenet,
    CreateOrderComponent,
    OrderListComponent
  ]
})
export class OrderModule {

}
