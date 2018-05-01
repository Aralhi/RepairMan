import DataAccess = require('../DataAccess');
import IUserModel = require('./../../model/UserModel');
import { Schema } from 'mongoose';
var timestamps = require('mongoose-timestamp');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {type: String, required: true},
            id : {type: String, required: true},
            userId : {type: String, required: true},
            _raw : {type: Schema.Types.Mixed, required: false},
            _json : {type: Schema.Types.Mixed, required: false}
        });
        schema.plugin(timestamps);
        return schema;
    }
}
let schema = mongooseConnection.model<IUserModel>('User', UserSchema.schema);
export = schema;
