import DataAccess = require('../DataAccess');
import IVendorModel = require('./../../model/VendorModel');
let timestamps = require('mongoose-timestamp');

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class VendorSchema {

    static get schema () {
        let schema =  mongoose.Schema({
            name : {type: String, required: true},
            phone : {type: String, required: false},
            address : {type: String, required: false},
            userId: { type: String, required: true }
        });
        schema.plugin(timestamps);
        return schema;
    }
}
let schema = mongooseConnection.model<IVendorModel>('Vendors', VendorSchema.schema);
export = schema;
