import DataAccess = require('../DataAccess');
import IStaffModel = require('./../../model/StaffModel');
let timestamps = require('mongoose-timestamp');

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class StaffSchema {

    static get schema () {
        let schema =  mongoose.Schema({
            name : {type: String, required: true},
            phone : {type: String, required: false},
            address : {type: String, required: false},
            remark : {type: String, required: false},
        });
        schema.plugin(timestamps);
        return schema;
    }
}
let schema = mongooseConnection.model<IStaffModel>('Staffs', StaffSchema.schema);
export = schema;
