import OrderRepository = require('../repository/OrderRepository');
import BaseBusiness = require('./BaseBusiness');
import IOrderModel = require('./../model/OrderModel');
import express = require('express');
class OrderBusiness implements BaseBusiness<IOrderModel> {
  private _orderRepository: OrderRepository;
  constructor() {
    this._orderRepository = new OrderRepository();
  }

  findById (req: express.Request, _id: string, callback: (error: any, result: IOrderModel) => void) {
    this._orderRepository.findById(req, _id, callback);
  }

  retrieve(req: express.Request, callback: (error: any, result: any) => void) {
    this._orderRepository.retrieve(req, callback);
  }

  create(req: express.Request, item: IOrderModel, callback: (error: any, result: any) => void) {
    this._orderRepository.create(req, item, callback);
  }
  update(req: express.Request, _id: string, item: IOrderModel, callback: (error: any, result: any) => void) {
    this._orderRepository.findById(req, _id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._orderRepository.update(req, res._id, item, callback);
      }
    });
  }
  delete(req: express.Request, _id: string, callback: (error: any, result: any) => void) {
    this._orderRepository.delete(req, _id, callback);
  }

  find (req: express.Request, searchText: string, progress: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._orderRepository.find(req, {
      $and: [
        {$or: [{'name': reg}, {'customer.name': reg}, {'no': reg}, {'customer.carNumber': reg},
          {'customer.carType': reg}, {'subject': reg}]},
        {$or: [{'progress': progress === 'all' ? {$in: [0, 1, 2]} : progress}]}
      ]
    }, callback);
  }
}
Object.seal(OrderBusiness);
export = OrderBusiness;
