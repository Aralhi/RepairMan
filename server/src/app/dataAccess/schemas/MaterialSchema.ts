import DataAccess = require('../DataAccess');
import ICustsomerModel = require('./../../model/MaterialModel');
var timestamps = require('mongoose-timestamp');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class MaterialSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {type: String, required: true},
            no : {type: String, required: false},
            guige : {type: String, required: false},
            unit : {type: String, required: false},
            vendor : {type: String, required: false},
            remark : {type: String, required: false},
        });
        schema.plugin(timestamps);
        return schema;
    }
}
let schema = mongooseConnection.model<ICustsomerModel>('Materials', MaterialSchema.schema);
export = schema;
