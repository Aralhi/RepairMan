import BaseBusiness = require('./BaseBusiness');
import VendorRepository = require('./../repository/VendorRepository');
import IVendorModel = require('./../model/VendorModel');

class VendorBusiness implements BaseBusiness<IVendorModel> {
  private _vendorRepository: VendorRepository;

  constructor() {
    this._vendorRepository = new VendorRepository();
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._vendorRepository.retrieve(callback);
  }

  create (item: IVendorModel, callback: (error: any, result: any) => void) {
    this._vendorRepository.create(item, callback);
  }

  update (_id: string, item: IVendorModel, callback: (error: any, result: any) => void) {
    this._vendorRepository.findById(_id, (err, res) => {
      if (err) 
        callback(err, res);
      else
        this._vendorRepository.update(res._id, item, callback);
    });
  }

  findById: (_id: string, callback: (error: any, result: IVendorModel) => void) => void;

  delete (_id: string, callback: (error: any, result: any) => void) {
    this._vendorRepository.delete(_id , callback);
  }

  find (searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._vendorRepository.find({$or: [{'name': reg}, {'address': reg}, {'phone': reg}, {'remark': reg}]}, callback);
  }
}
Object.seal(VendorBusiness);
export = VendorBusiness;
