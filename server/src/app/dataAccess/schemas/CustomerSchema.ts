import DataAccess = require('../DataAccess');
import ICustsomerModel = require("./../../model/interfaces/CustomerModel");
var timestamps = require('mongoose-timestamp');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CustomerSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {type: String, required: true},
            carNumber : {type: String, required: false},
            phone : {type: String, required: false},
            carType : {type: String, required: false},
            company : {type: String, required: false},
            remark : {type: String, required: false},
        });
        schema.plugin(timestamps);        
        return schema;
    }
}
let schema = mongooseConnection.model<ICustsomerModel>("Customers", CustomerSchema.schema);
export = schema;
