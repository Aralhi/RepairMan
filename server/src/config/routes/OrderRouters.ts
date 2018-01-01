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
    router.get('/orders', controller.retrieve);
    router.post('/orders', controller.create);
    router.put('/orders/:_id', controller.update);
    router.delete('/orders/:_id', controller.delete);
    router.get('/orders/:_id', controller.findById);
    router.get('/orders/:searchText', controller.find);
    return router;
  }
}
Object.seal(OrderRoutes);
export = OrderRoutes;
