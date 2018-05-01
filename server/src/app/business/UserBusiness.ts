import BaseBusiness = require('./BaseBusiness');
import UserRepository = require('./../repository/UserRepository');
import IUserModel = require('./../model/UserModel');
import express = require('express');
class UserBusiness implements BaseBusiness<IUserModel> {
  private _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  retrieve(req: express.Request, callback: (error: any, result: any) => void) {
    this._userRepository.retrieve(req, callback);
  }

  create (req: express.Request, item: IUserModel, callback: (error: any, result: any) => void) {
    this._userRepository.create(req, item, callback);
  }

  update (req: express.Request, _id: string, item: IUserModel, callback: (error: any, result: any) => void) {
    this._userRepository.findById(req, _id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._userRepository.update(req, res._id, item, callback);
      }
    });
  }

  findById (req: express.Request, _id: string, callback: (error: any, result: any) => void) {
    this._userRepository.findById(req, _id, callback);
  }

  findOne (req: express.Request, conditions: Object, callback: (error: any, result: any) => void) {
    this._userRepository.findOne(req, conditions, callback);
  }

  delete (req: express.Request, _id: string, callback: (error: any, result: any) => void) {
    this._userRepository.delete(req, _id , callback);
  }

  find (req: express.Request, searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._userRepository.find(req, {$or: [{'name': reg}, {'carNumber': reg}, {'phone': reg}, {'carType': reg}]}, callback);
  }
}
Object.seal(UserBusiness);
export = UserBusiness;
