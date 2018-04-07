import express = require('express');
import MaterialController = require('./../../controllers/MaterialController');

let router = express.Router();
class MaterialRoutes {
  private _materialController: MaterialController;

  constructor() {
    this._materialController = new MaterialController();
  }
  get routes() {
    let controller = this._materialController;

    router.get('/materials', controller.retrieve);
    router.get('/materials/lessThan/:key/:value', controller.findLessThan);
    router.post('/materials', controller.create);
    router.put('/materials/:_id', controller.update);
    // router.get('/materials/:_id', controller.findById)
    router.delete('/materials/:_id', controller.delete);
    router.get('/materials/:searchText', controller.find);
    router.post('/materials/:_id', controller.updateCount);

    return router;
  }
}

Object.seal(MaterialRoutes);
export = MaterialRoutes;
