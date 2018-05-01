import BaseBusiness = require('./BaseBusiness');
import CustomerRepository = require('./../repository/CustomerRepository');
import ICustomerModel = require('./../model/CustomerModel');
import express = require('express');

class CustomerBusiness implements BaseBusiness<ICustomerModel> {
  private _customerRepository: CustomerRepository;

  constructor() {
    this._customerRepository = new CustomerRepository();
  }

  retrieve(req: express.Request, callback: (error: any, result: any) => void) {
    this._customerRepository.retrieve(req, callback);
  }

  create (req: express.Request, item: ICustomerModel, callback: (error: any, result: any) => void) {
    this._customerRepository.create(req, item, callback);
  }

  update (req: express.Request, _id: string, item: ICustomerModel, callback: (error: any, result: any) => void) {
    this._customerRepository.findById(req, _id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._customerRepository.update(req, res._id, item, callback);
      }
    });
  }

  findById: (req: express.Request, _id: string, callback: (error: any, result: ICustomerModel) => void) => void;

  delete (req: express.Request, _id: string, callback: (error: any, result: any) => void) {
    this._customerRepository.delete(req, _id , callback);
  }

  find (req, searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._customerRepository.find(req, {$or: [{'name': reg}, {'carNumber': reg}, {'phone': reg}, {'carType': reg}]}, callback);
  }
}
Object.seal(CustomerBusiness);
export = CustomerBusiness;
