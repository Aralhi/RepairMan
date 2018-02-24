import express = require('express');
import StaffController = require('./../../controllers/StaffController');

let router = express.Router();
class StaffRoutes {
  private _staffController: StaffController;

  constructor() {
    this._staffController = new StaffController();
  }
  get routes() {
    let controller = this._staffController;

    router.get('/staff', controller.retrieve);
    router.post('/staff', controller.create);
    router.put('/staff/:_id', controller.update);
    // router.get('/staff/:_id', controller.findById)
    router.delete('/staff/:_id', controller.delete);
    router.get('/staff/:searchText', controller.find);

    return router;
  }
}

Object.seal(StaffRoutes);
export = StaffRoutes;
