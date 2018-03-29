import IVendorModel = require('./../app/model/VendorModel');
import express = require('express');
import IBaseController = require('./BaseController');
import VendorBusiness = require('./../app/business/VendorBusiness');

class VendorController implements IBaseController<VendorBusiness> {
  findById: express.RequestHandler;

  retrieve(req: express.Request, res: express.Response): void {
    try {
      let vendorBusiness = new VendorBusiness();
      vendorBusiness.retrieve((error, result) => {
        if (error) {
          res.send({ error: error });
        } else {
          res.send({
            status: 'success',
            result: result
          });
        }
      });
    } catch (e) {
      res.send({ error: 'error in your request' });
    }
  }

  find(req: express.Request, res: express.Response): void {
    try {
      let vendorBusiness = new VendorBusiness();
      const searchText: string = req.params.searchText;
      vendorBusiness.find(searchText, (error, result) => {
        if (error) {
          res.send({ error: error });
        } else {
          res.send({
            status: 'success',
            result: result
          });
        }
      });
    } catch (e) {
      res.send({
        status: 'error',
        msg: '查询失败！' + e
      });
    }
  }

  delete(req: express.Request, res: express.Response): void {
    try {
      let _id: string = req.params._id;
      let vendorBusiness = new VendorBusiness();
      vendorBusiness.delete(_id, (error, result) => {
        if (error) 
          res.send({ error: error });
        else
          res.send({
            status: 'success',
            msg: '删除成功！'
          });
      });
    } catch (e) {
      res.send({
        status: 'error',
        msg: '删除失败！' + e
      });
    }
  }

  create(req: express.Request, res: express.Response): void {
    try {
      let vendor: IVendorModel = <IVendorModel>req.body;
      let vendorBusiness = new VendorBusiness();
      vendorBusiness.create(vendor, (error, result) => {
        if (error) 
          res.send({ error: error });
        else
          res.send({
            status: 'success',
            msg: '保存成功！'
          });
      });
    } catch (e) {
      res.send({
        status: 'error',
        msg: '保存失败！' + e
      });
    }
  }

  update(req: express.Request, res: express.Response): void {
    try {
      let vendor: IVendorModel = <IVendorModel>req.body;
      let _id: string = req.params._id;
      let vendorBusiness = new VendorBusiness();
      vendorBusiness.update(_id, vendor, (error, result) => {
        if (error) 
          res.send({ error: error });
        else
          res.send({
            status: 'success',
            msg: '保存成功！'
          });
      });
    } catch (e) {
      res.send({
        status: 'error',
        msg: '保存失败！' + e
      });
    }
  }
}
export = VendorController;
