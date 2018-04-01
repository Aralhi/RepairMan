import IRead = require('./interfaces/Read');
import IWrite = require('./interfaces/Write');
import IHeroModel = require('./../model/interfaces/HeroModel');

import mongoose = require('mongoose');

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._model.find({}, callback).sort({createdAt: -1});
    }

    update (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({_id: _id}, item, callback);
    }

    updateOneKey (_id: mongoose.Types.ObjectId, key: string, value: any, callback: (error: any, result: any) => void) {
        this._model.update({_id: _id}, {$set: {[key]: value}}, callback);
    }

    delete (_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({_id: this.toObjectId(_id)}, (err) => callback(err, null));

    }

    findById (_id: string, callback: (error: any, result: T) => void) {
        this._model.findById( _id, callback).sort({create_at: -1});
    }

    find (conditions: any, callback: (error: any, result: T) => void) {
        this._model.find(conditions, callback).sort({createdAt: -1});
    }

    private toObjectId (_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}

export = RepositoryBase;