import IMaterialModel = require('./../app/model/MaterialModel');
import express = require('express');
import IBaseController = require('./BaseController');
import MaterialBusiness = require('./../app/business/MaterialBusiness');

class MaterialController implements IBaseController<MaterialBusiness> {
  findById: express.RequestHandler;

  retrieve(req: express.Request, res: express.Response): void {
    try {
      let materialBusiness = new MaterialBusiness();
      materialBusiness.retrieve((error, result) => {
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
      let materialBusiness = new MaterialBusiness();
      const searchText: string = req.params.searchText;
      materialBusiness.find(searchText, (error, result) => {
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
      let materialBusiness = new MaterialBusiness();
      materialBusiness.delete(_id, (error, result) => {
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
      let material: IMaterialModel = <IMaterialModel>req.body;
      let materialBusiness = new MaterialBusiness();
      materialBusiness.create(material, (error, result) => {
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
      let material: IMaterialModel = <IMaterialModel>req.body;
      let _id: string = req.params._id;
      let materialBusiness = new MaterialBusiness();
      materialBusiness.update(_id, material, (error, result) => {
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

  updateCount(req: express.Request, res: express.Response): void {
    try {
      let params = req.body;
      let _id: string = req.params._id;
      let materialBusiness = new MaterialBusiness();
      materialBusiness.updateCount(_id, params.key, params.value, (error, result) => {
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
export = MaterialController;
