import OrderRepository = require('../repository/OrderRepository');
import BaseBusiness = require('./BaseBusiness');
import IOrderModel = require('./../model/OrderModel');

class OrderBusiness implements BaseBusiness<IOrderModel> {
  private _orderRepository: OrderRepository;
  constructor() {
    this._orderRepository = new OrderRepository();
  }

  findById (_id: string, callback: (error: any, result: IOrderModel) => void) {
    this._orderRepository.findById(_id, callback);
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._orderRepository.retrieve(callback);
  }

  create(item: IOrderModel, callback: (error: any, result: any) => void) {
    this._orderRepository.create(item, callback);
  }
  update(_id: string, item: IOrderModel, callback: (error: any, result: any) => void) {
    this._orderRepository.findById(_id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._orderRepository.update(res._id, item, callback);
      }
    });
  }
  delete(_id: string, callback: (error: any, result: any) => void) {
    this._orderRepository.delete(_id, callback);
  }

  find (searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._orderRepository.find({$or: [{'name': reg}, {'no': reg}, {'carNumber': reg}, {'subject': reg}]}, callback);
  }
}
Object.seal(OrderBusiness);
export = OrderBusiness;
