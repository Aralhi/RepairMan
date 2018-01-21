import express = require('express');
import CustomerController = require('./../../controllers/CustomerController');

let router = express.Router();
class CustomerRoutes {
  private _customerController: CustomerController;

  constructor() {
    this._customerController = new CustomerController();
  }
  get routes() {
    let controller = this._customerController;

    router.get('/customers', controller.retrieve);
    router.post('/customers', controller.create);
    router.put('/customers/:_id', controller.update);
    // router.get('/customers/:_id', controller.findById)
    router.delete('/customers/:_id', controller.delete);
    router.get('/customers/:searchText', controller.find);

    return router;
  }
}

Object.seal(CustomerRoutes);
export = CustomerRoutes;
