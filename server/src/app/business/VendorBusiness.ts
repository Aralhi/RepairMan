import BaseBusiness = require('./BaseBusiness');
import VendorRepository = require('./../repository/VendorRepository');
import IVendorModel = require('./../model/VendorModel');
import express = require('express');
class VendorBusiness implements BaseBusiness<IVendorModel> {
  private _vendorRepository: VendorRepository;

  constructor() {
    this._vendorRepository = new VendorRepository();
  }

  retrieve(req: express.Request, callback: (error: any, result: any) => void) {
    this._vendorRepository.retrieve(req, callback);
  }

  create (req: express.Request, item: IVendorModel, callback: (error: any, result: any) => void) {
    this._vendorRepository.create(req, item, callback);
  }

  update (req: express.Request, _id: string, item: IVendorModel, callback: (error: any, result: any) => void) {
    this._vendorRepository.findById(req, _id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._vendorRepository.update(req, res._id, item, callback);
      }
    });
  }

  findById: (req: express.Request, _id: string, callback: (error: any, result: IVendorModel) => void) => void;

  delete (req: express.Request, _id: string, callback: (error: any, result: any) => void) {
    this._vendorRepository.delete(req, _id , callback);
  }

  find (req: express.Request, searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._vendorRepository.find(req, {$or: [{'name': reg}, {'address': reg}, {'phone': reg}, {'remark': reg}]}, callback);
  }
}
Object.seal(VendorBusiness);
export = VendorBusiness;
