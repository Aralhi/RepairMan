import IUserModel = require('./../app/model/UserModel');
import express = require('express');
import IBaseController = require('./BaseController');
import UserBusiness = require('./../app/business/UserBusiness');

class UserController implements IBaseController<UserBusiness> {

  findById(req: express.Request, res: express.Response): void {
    try {
      var _id: string = req.params._id;
      var userBusiness = new UserBusiness();
      userBusiness.findById(_id, (error, result) => {
        if (error) {
          res.send({ error: error });
        } else {
          res.send({
            status: 'success',
            result: result
          });
        }
      });
    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }

  findOne(req: express.Request, res: express.Response): void {
    try {
      if (!req.user) {
        res.send({ error: '请先登陆' });
        return;
      }
      var id: string = req.user.id;
      var userBusiness = new UserBusiness();
      userBusiness.findOne({id: id}, (error, result) => {
        if (error) {
          res.send({ error: error });
        } else {
          res.send({
            status: 'success',
            result: result
          });
        }
      });
    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }

  retrieve(req: express.Request, res: express.Response): void {
    try {
      let userBusiness = new UserBusiness();
      userBusiness.retrieve((error, result) => {
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
      let userBusiness = new UserBusiness();
      const searchText: string = req.params.searchText;
      userBusiness.find(searchText, (error, result) => {
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
      let userBusiness = new UserBusiness();
      userBusiness.delete(_id, (error, result) => {
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
      let user: IUserModel = <IUserModel>req.body;
      let userBusiness = new UserBusiness();
      userBusiness.create(user, (error, result) => {
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
      let user: IUserModel = <IUserModel>req.body;
      let _id: string = req.params._id;
      let userBusiness = new UserBusiness();
      userBusiness.update(_id, user, (error, result) => {
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
export = UserController;
