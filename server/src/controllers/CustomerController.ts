import express = require('express')
import IBaseController = require('./BaseController')
import CustomerBusiness = require('./../app/business/CustomerBusiness')

class CustomerController implements IBaseController<CustomerBusiness> {
  findById: express.RequestHandler
  create: express.RequestHandler
  update: express.RequestHandler

  retrieve(req: express.Request, res: express.Response): void {
    try {
      let heroBusiness = new CustomerBusiness()
      heroBusiness.retrieve((error, result) => {
        if (error) res.send({ error: 'error' })
        else res.send(result)
      })
    } catch (e) {
      console.log(e)
      res.send({ error: 'error in your request' })
    }
  }

  delete(req: express.Request, res: express.Response): void {
    try {
      let _id: string = req.params._id
      let customerBusiness = new CustomerBusiness()
      customerBusiness.delete(_id, (error, result) => {
        if (error) res.send({ error: 'error' })
        else res.send({ 
          status: 'success',
          msg: '删除成功！'
        })
      })
    } catch (e) {
      res.send({
        status: 'error',
        msg: '删除失败！'
      })
    }
  }
}
export = CustomerController
