import express = require('express');
import OrderController = require('./../../controllers/OrderController');

let router = express.Router();
class OrderRoutes {
  private _orderController: OrderController;
  constructor() {
    this._orderController = new OrderController();
  }

  get routes() {
    let controller = this._orderController;
    router.post('/orders', controller.create);
    router.put('/orders/:_id', controller.update);
    router.delete('/orders/:_id', controller.delete);
    router.get('/orders', controller.retrieve);
    router.get('/orders/:_id', controller.findById);
    router.get('/orders/search/:progress/', controller.find);
    router.get('/orders/search/:progress/:group', controller.find);
    router.get('/orders/search/:progress/:group/:searchText', controller.find);
    return router;
  }
}
Object.seal(OrderRoutes);
export = OrderRoutes;
