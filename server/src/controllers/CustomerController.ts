import ICustomerModel = require('./../app/model/interfaces/CustomerModel')
import express = require('express')
import IBaseController = require('./BaseController')
import CustomerBusiness = require('./../app/business/CustomerBusiness')

class CustomerController implements IBaseController<CustomerBusiness> {
  findById: express.RequestHandler

  retrieve(req: express.Request, res: express.Response): void {
    try {
      let heroBusiness = new CustomerBusiness()
      heroBusiness.retrieve((error, result) => {
        if (error) 
          res.send({ error: error })
        else 
          res.send(result)
      })
    } catch (e) {
      console.log(e)
      res.send({ error: 'error in your request' })
    }
  }
  
  find(req: express.Request, res: express.Response): void {
    try {
      let heroBusiness = new CustomerBusiness();
      const searchText: string = req.params.searchText;
      heroBusiness.find(searchText, (error, result) => {
        if (error) 
          res.send({ error: error });
        else
          res.send({
            status: 'success',
            msg: '查询成功！'
          })
      })
    } catch (e) {
      res.send({
        status: 'error',
        msg: '查询失败！' + e
      })
    }
  }

  delete(req: express.Request, res: express.Response): void {
    try {
      let _id: string = req.params._id
      let customerBusiness = new CustomerBusiness()
      customerBusiness.delete(_id, (error, result) => {
        if (error) 
          res.send({ error: error });
        else
          res.send({
            status: 'success',
            msg: '删除成功！'
          })
      })
    } catch (e) {
      res.send({
        status: 'error',
        msg: '删除失败！' + e
      })
    }
  }

  create(req: express.Request, res: express.Response): void {
    try {
      let hero: ICustomerModel = <ICustomerModel>req.body
      let heroBusiness = new CustomerBusiness()
      heroBusiness.create(hero, (error, result) => {
        if (error) 
          res.send({ error: error });
        else
          res.send({
            status: 'success',
            msg: '保存成功！'
          })
      })
    } catch (e) {
      res.send({
        status: 'error',
        msg: '保存失败！' + e
      })
    }
  }

  update(req: express.Request, res: express.Response): void {
    try {
      let hero: ICustomerModel = <ICustomerModel>req.body
      let _id: string = req.params._id
      let heroBusiness = new CustomerBusiness()
      heroBusiness.update(_id, hero, (error, result) => {
        if (error) 
          res.send({ error: error });
        else
          res.send({
            status: 'success',
            msg: '保存成功！'
          })
      })
    } catch (e) {
      res.send({
        status: 'error',
        msg: '保存失败！' + e
      })
    }
  }
}
export = CustomerController
