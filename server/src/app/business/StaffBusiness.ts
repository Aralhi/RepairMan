import BaseBusiness = require('./BaseBusiness');
import StaffRepository = require('./../repository/StaffRepository');
import IStaffModel = require('./../model/StaffModel');
import express = require('express');
class StaffBusiness implements BaseBusiness<IStaffModel> {
  private _staffRepository: StaffRepository;

  constructor() {
    this._staffRepository = new StaffRepository();
  }

  retrieve(req: express.Request, callback: (error: any, result: any) => void) {
    this._staffRepository.retrieve(req, callback);
  }

  create (req: express.Request, item: IStaffModel, callback: (error: any, result: any) => void) {
    this._staffRepository.create(req, item, callback);
  }

  update (req: express.Request, _id: string, item: IStaffModel, callback: (error: any, result: any) => void) {
    this._staffRepository.findById(req, _id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._staffRepository.update(req, res._id, item, callback);
      }
    });
  }

  findById: (req: express.Request, _id: string, callback: (error: any, result: IStaffModel) => void) => void;

  delete (req: express.Request, _id: string, callback: (error: any, result: any) => void) {
    this._staffRepository.delete(req, _id , callback);
  }

  find (req: express.Request, searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._staffRepository.find(req, {$or: [{'name': reg}, {'address': reg}, {'phone': reg}, {'remark': reg}]}, callback);
  }
}
Object.seal(StaffBusiness);
export = StaffBusiness;
