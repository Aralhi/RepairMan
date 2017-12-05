import DataAccess = require('../DataAccess');
import ICustsomerModel = require("./../../model/interfaces/CustomerModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CustomerSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {type: String, required: true},
            carNumber : {type: String, required: true},
            phone : {type: String, required: true},
            carType : {type: String, required: true},
            company : {type: String, required: true},
            remark : {type: String, required: true},
        });
        return schema;
    }
}
let schema = mongooseConnection.model<ICustsomerModel>("Customers", CustomerSchema.schema);
export = schema;
