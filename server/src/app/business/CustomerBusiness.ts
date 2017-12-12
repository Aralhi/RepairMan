import ICustomerBusiness = require('./interfaces/CustomerBusiness')
import CustomerRepository = require('./../repository/CustomerRepository')
import ICustomerModel = require('./../model/interfaces/CustomerModel')
import mongoose = require("mongoose");

class CustomerBusiness implements ICustomerBusiness {
  private _customerRepository: CustomerRepository
  private _model: mongoose.Model<mongoose.Document>;

  constructor() {
    this._customerRepository = new CustomerRepository()
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._customerRepository.retrieve(callback)
  }
  
  create (item: ICustomerModel, callback: (error: any, result: any) => void) {
    this._customerRepository.create(item, callback);
  }
  
  update (_id: string, item: ICustomerModel, callback: (error: any, result: any) => void) {
    this._customerRepository.findById(_id, (err, res) => {
      if(err) 
        callback(err, res);
      else
        this._customerRepository.update(res._id, item, callback);
    });
  }

  findById: (_id: string, callback: (error: any, result: ICustomerModel) => void) => void;
  
  delete (_id: string, callback:(error: any, result: any) => void) {
    this._customerRepository.delete(_id , callback);
  }

  find (searchText: string, callback:(error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i') //不区分大小写    
    this._model.find({'name': reg} , callback);
  }
}
Object.seal(CustomerBusiness);
export = CustomerBusiness;
