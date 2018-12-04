import IBaseController = require('./BaseController');
import express = require('express');
import OrderBusiness = require('./../app/business/OrderBusiness');
import IOrderModel = require('./../app/model/OrderModel');

class OrderController implements IBaseController<OrderBusiness> {

  retrieve(req: express.Request, res: express.Response): void {
    try {
      let orderBusiness = new OrderBusiness();
      orderBusiness.retrieve(req, (error, result) => {
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
      let orderBusiness = new OrderBusiness();
      const searchText: string = req.params.searchText || '';
      const progress: string = req.params.progress;
      const group: string = req.params.group;
      orderBusiness.find(req, searchText, progress, group, (error, result) => {
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

  findById(req: express.Request, res: express.Response): void {
    try {
      let _id: string = req.params._id;
      let orderBusiness = new OrderBusiness();
      orderBusiness.findById(req, _id, (error, result) => {
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
      let orderBusiness = new OrderBusiness();
      orderBusiness.delete(req, _id, (error, result) => {
        if (error) {
          res.send({ error: error });
        } else {
          res.send({
            status: 'success',
            msg: '删除成功！'
          });
        }
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
      let order: IOrderModel = <IOrderModel>req.body;
      let orderBusiness = new OrderBusiness();
      orderBusiness.create(req, order, (error, result) => {
        if (error) {
          res.send({ error: error });
        } else {
          res.send({
            status: 'success',
            msg: '保存成功！'
          });
        }
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
      let hero: IOrderModel = <IOrderModel>req.body;
      let _id: string = req.params._id;
      let orderBusiness = new OrderBusiness();
      orderBusiness.update(req, _id, hero, (error, result) => {
        if (error) {
          res.send({ error: error });
        } else {
          res.send({
            status: 'success',
            msg: '保存成功！'
          });
        }
      });
    } catch (e) {
      res.send({
        status: 'error',
        msg: '保存失败！' + e
      });
    }
  }
}
export = OrderController;
