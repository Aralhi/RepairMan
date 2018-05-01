import ICustomerModel = require('./../app/model/CustomerModel');
import express = require('express');
import IBaseController = require('./BaseController');
import CustomerBusiness = require('./../app/business/CustomerBusiness');

class CustomerController implements IBaseController<CustomerBusiness> {
  findById: express.RequestHandler;

  retrieve(req: express.Request, res: express.Response): void {
    try {
      let customerBusiness = new CustomerBusiness();
      customerBusiness.retrieve(req, (error, result) => {
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
      let customerBusiness = new CustomerBusiness();
      const searchText: string = req.params.searchText;
      customerBusiness.find(req, searchText, (error, result) => {
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
      let customerBusiness = new CustomerBusiness();
      customerBusiness.delete(req, _id, (error, result) => {
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
      let customer: ICustomerModel = <ICustomerModel>req.body;
      let customerBusiness = new CustomerBusiness();
      customerBusiness.create(req, customer, (error, result) => {
        if (error) 
          res.send({ error: error });
        else
          res.send({
            status: 'success',
            msg: '保存成功！',
            id: result._id.toString()
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
      let customer: ICustomerModel = <ICustomerModel>req.body;
      let _id: string = req.params._id;
      let customerBusiness = new CustomerBusiness();
      customerBusiness.update(req, _id, customer, (error, result) => {
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
export = CustomerController;
