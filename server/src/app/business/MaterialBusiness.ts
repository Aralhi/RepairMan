import BaseBusiness = require('./BaseBusiness');
import MaterialRepository = require('./../repository/MaterialRepository');
import IMaterialModel = require('./../model/MaterialModel');
import express = require('express');
class MaterialBusiness implements BaseBusiness<IMaterialModel> {
  private _materialRepository: MaterialRepository;

  constructor() {
    this._materialRepository = new MaterialRepository();
  }

  retrieve(req: express.Request, callback: (error: any, result: any) => void) {
    this._materialRepository.retrieve(req, callback);
  }

  create (req: express.Request, item: IMaterialModel, callback: (error: any, result: any) => void) {
    this._materialRepository.create(req, item, callback);
  }

  update (req: express.Request, _id: string, item: IMaterialModel, callback: (error: any, result: any) => void) {
    this._materialRepository.findById(req, _id, (err, res) => {
      if (err) 
        callback(err, res);
      else
        this._materialRepository.update(req, res._id, item, callback);
    });
  }

  updateCount (req: express.Request, _id: string, key: string, value: any, callback: (error: any, result: any) => void) {
    this._materialRepository.findById(req, _id, (err, res) => {
      if (err) 
        callback(err, res);
      else
        this._materialRepository.updateOneKey(req, res._id, key, value, callback);
    });
  }

  findById: (req: express.Request, _id: string, callback: (error: any, result: IMaterialModel) => void) => void;

  delete (req: express.Request, _id: string, callback: (error: any, result: any) => void) {
    this._materialRepository.delete(req, _id , callback);
  }

  find (req: express.Request, searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._materialRepository.find(req, {$or: [{'name': reg}, {'carType': reg}, {'vendor.name': reg}, {'remark': reg}]}, callback);
  }

  findLessThan (req: express.Request, key: string, value: string, callback: (error: any, result: any) => void) {
    this._materialRepository.find(req, {[key]: {$lte: value}}, callback);
  }
}
Object.seal(MaterialBusiness);
export = MaterialBusiness;
