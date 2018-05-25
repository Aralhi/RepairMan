import IRead = require('./interfaces/Read');
import IWrite = require('./interfaces/Write');
import express = require('express');
import mongoose = require('mongoose');

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create (req: express.Request, item: T, callback: (error: any, result: any) => void) {
        const res = this._model.create(Object.assign(item, {userId: req.user.id}), callback);
        console.log(res);
    }

    retrieve (req: express.Request, callback: (error: any, result: any) => void) {
        this._model.find({userId: req.user.id}, callback).sort({createdAt: -1});
    }

    update (req: express.Request, _id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({_id: _id, userId: req.user.id}, item, callback);
    }

    updateOneKey (req: express.Request, _id: mongoose.Types.ObjectId, key: string, value: any, callback: (error: any, result: any) => void) {
        this._model.update({_id: _id, userId: req.user.id}, {$set: {[key]: value}}, callback);
    }

    delete (req: express.Request, _id: string, callback: (error: any, result: any) => void) {
        this._model.remove({_id: this.toObjectId(_id), userId: req.user.id}, (err) => callback(err, null));
    }

    findById (req: express.Request, _id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback).sort({create_at: -1});
    }
    findOne (req: express.Request, conditions: Object, callback: (error: any, result: T) => void) {
        this._model.findOne({$and: [{userId: req.user.id}, conditions]}, callback).sort({create_at: -1});
    }
    find (req: express.Request, conditions: any, callback: (error: any, result: T) => void) {
        this._model.find({$and : [{userId: req.user.id}, conditions]}, callback).sort({createdAt: -1});
    }

    private toObjectId (_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}

export = RepositoryBase;