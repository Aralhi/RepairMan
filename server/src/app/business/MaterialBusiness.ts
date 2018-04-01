import BaseBusiness = require('./BaseBusiness');
import MaterialRepository = require('./../repository/MaterialRepository');
import IMaterialModel = require('./../model/MaterialModel');

class MaterialBusiness implements BaseBusiness<IMaterialModel> {
  private _materialRepository: MaterialRepository;

  constructor() {
    this._materialRepository = new MaterialRepository();
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._materialRepository.retrieve(callback);
  }

  create (item: IMaterialModel, callback: (error: any, result: any) => void) {
    this._materialRepository.create(item, callback);
  }

  update (_id: string, item: IMaterialModel, callback: (error: any, result: any) => void) {
    this._materialRepository.findById(_id, (err, res) => {
      if (err) 
        callback(err, res);
      else
        this._materialRepository.update(res._id, item, callback);
    });
  }

  updateCount (_id: string, key: string, value: any, callback: (error: any, result: any) => void) {
    this._materialRepository.findById(_id, (err, res) => {
      if (err) 
        callback(err, res);
      else
        this._materialRepository.updateOneKey(res._id, key, value, callback);
    });
  }

  findById: (_id: string, callback: (error: any, result: IMaterialModel) => void) => void;

  delete (_id: string, callback: (error: any, result: any) => void) {
    this._materialRepository.delete(_id , callback);
  }

  find (searchText: string, callback: (error: any, result: any) => void) {
    const reg = new RegExp(searchText, 'i');
    this._materialRepository.find({$or: [{'name': reg}, {'carType': reg}, {'vendor.name': reg}, {'remark': reg}]}, callback);
  }
}
Object.seal(MaterialBusiness);
export = MaterialBusiness;
