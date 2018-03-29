import express = require('express');
import VendorController = require('./../../controllers/VendorController');

let router = express.Router();
class VendorRoutes {
  private _vendorController: VendorController;

  constructor() {
    this._vendorController = new VendorController();
  }
  get routes() {
    let controller = this._vendorController;

    router.get('/vendors', controller.retrieve);
    router.post('/vendors', controller.create);
    router.put('/vendors/:_id', controller.update);
    // router.get('/vendors/:_id', controller.findById)
    router.delete('/vendors/:_id', controller.delete);
    router.get('/vendors/:searchText', controller.find);

    return router;
  }
}

Object.seal(VendorRoutes);
export = VendorRoutes;
