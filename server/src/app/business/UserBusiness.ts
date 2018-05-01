import BaseBusiness = require('./BaseBusiness');
import UserRepository = require('./../repository/UserRepository');
import IUserModel = require('./../model/UserModel');

class UserBusiness implements BaseBusiness<IUserModel> {
  private _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._userRepository.retrieve(callback);
  }
  
  create (item: IUserModel, callback: (error: any, result: any) => void) {
    this._userRepository.create(item, callback);
  }
  
  update (_id: string, item: IUserModel, callback: (error: any, result: any) => void) {
    this._userRepository.findById(_id, (err, res) => {
      if (err) 
        callback(err, res);
      else
        this._userRepository.update(res._id, item, callback);
    });
  }

  findById (_id: string, callback: (error: any, result: any) => void) {
    this._userRepository.findById(_id, callback);
  }

  findOne (conditions: Object, callback: (error: any, result: any) => void) {
    this._userRepository.findOne(conditions, callback);
  }

  delete (_id: string, callback: (error: any, result: any) => void) {
    this._userRepository.delete(_id , callback);
  }

  find (searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._userRepository.find({$or: [{'name': reg}, {'carNumber': reg}, {'phone': reg}, {'carType': reg}]}, callback);
  }
}
Object.seal(UserBusiness);
export = UserBusiness;
