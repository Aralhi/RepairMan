import IStaffModel = require('./../app/model/StaffModel');
import express = require('express');
import IBaseController = require('./BaseController');
import StaffBusiness = require('./../app/business/StaffBusiness');

class StaffController implements IBaseController<StaffBusiness> {
  findById: express.RequestHandler;

  retrieve(req: express.Request, res: express.Response): void {
    try {
      let staffBusiness = new StaffBusiness();
      staffBusiness.retrieve((error, result) => {
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
      let staffBusiness = new StaffBusiness();
      const searchText: string = req.params.searchText;
      staffBusiness.find(searchText, (error, result) => {
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
      let staffBusiness = new StaffBusiness();
      staffBusiness.delete(_id, (error, result) => {
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
      let staff: IStaffModel = <IStaffModel>req.body;
      let staffBusiness = new StaffBusiness();
      staffBusiness.create(staff, (error, result) => {
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
      let staff: IStaffModel = <IStaffModel>req.body;
      let _id: string = req.params._id;
      let staffBusiness = new StaffBusiness();
      staffBusiness.update(_id, staff, (error, result) => {
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
export = StaffController;
