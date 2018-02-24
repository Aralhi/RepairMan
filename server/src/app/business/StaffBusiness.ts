import BaseBusiness = require('./BaseBusiness');
import StaffRepository = require('./../repository/StaffRepository');
import IStaffModel = require('./../model/StaffModel');

class StaffBusiness implements BaseBusiness<IStaffModel> {
  private _staffRepository: StaffRepository;

  constructor() {
    this._staffRepository = new StaffRepository();
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._staffRepository.retrieve(callback);
  }
  
  create (item: IStaffModel, callback: (error: any, result: any) => void) {
    this._staffRepository.create(item, callback);
  }
  
  update (_id: string, item: IStaffModel, callback: (error: any, result: any) => void) {
    this._staffRepository.findById(_id, (err, res) => {
      if (err) 
        callback(err, res);
      else
        this._staffRepository.update(res._id, item, callback);
    });
  }

  findById: (_id: string, callback: (error: any, result: IStaffModel) => void) => void;
  
  delete (_id: string, callback: (error: any, result: any) => void) {
    this._staffRepository.delete(_id , callback);
  }

  find (searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._staffRepository.find({$or: [{'name': reg}, {'address': reg}, {'phone': reg}, {'remark': reg}]}, callback);
  }
}
Object.seal(StaffBusiness);
export = StaffBusiness;
