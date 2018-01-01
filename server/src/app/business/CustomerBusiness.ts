import BaseBusiness = require('./BaseBusiness');
import CustomerRepository = require('./../repository/CustomerRepository');
import ICustomerModel = require('./../model/CustomerModel');

class CustomerBusiness implements BaseBusiness<ICustomerModel> {
  private _customerRepository: CustomerRepository;

  constructor() {
    this._customerRepository = new CustomerRepository();
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._customerRepository.retrieve(callback);
  }
  
  create (item: ICustomerModel, callback: (error: any, result: any) => void) {
    this._customerRepository.create(item, callback);
  }
  
  update (_id: string, item: ICustomerModel, callback: (error: any, result: any) => void) {
    this._customerRepository.findById(_id, (err, res) => {
      if (err) 
        callback(err, res);
      else
        this._customerRepository.update(res._id, item, callback);
    });
  }

  findById: (_id: string, callback: (error: any, result: ICustomerModel) => void) => void;
  
  delete (_id: string, callback: (error: any, result: any) => void) {
    this._customerRepository.delete(_id , callback);
  }

  find (searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._customerRepository.find({$or: [{'name': reg}, {'carNumber': reg}, {'phone': reg}, {'carType': reg}]}, callback);
  }
}
Object.seal(CustomerBusiness);
export = CustomerBusiness;
