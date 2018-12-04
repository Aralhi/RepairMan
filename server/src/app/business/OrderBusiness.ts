import OrderRepository = require('../repository/OrderRepository');
import BaseBusiness = require('./BaseBusiness');
import IOrderModel = require('./../model/OrderModel');
import express = require('express');
import { filter } from 'minimatch';
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

  find (req: express.Request, searchText: string, progress: string, group: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    let filters = [];
    filters.push({$or: [{'name': reg}, {'customer.name': reg}, {'no': reg}, {'customer.carNumber': reg},
    {'customer.carType': reg}, {'subject': reg}]});
    if (progress !== 'all' && progress) {
      filters.push({$or: [{'progress': progress}]});
    }
    if (group !== 'all' && group) {
      filters.push({$or: [{'assignStaffs.group': group}]});
    }
    this._orderRepository.find(req, {
      $and: filters
    }, callback);
  }
}
Object.seal(OrderBusiness);
export = OrderBusiness;
