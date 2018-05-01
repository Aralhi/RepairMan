import DataAccess = require('../DataAccess');
import IMaterialModel = require('./../../model/MaterialModel');
let timestamps = require('mongoose-timestamp');

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class MaterialSchema {

    static get schema () {
        let schema =  mongoose.Schema({
            name : {type: String, required: true},
            carType : {type: String, required: false},
            count : {type: Number, required: false},
            unit : {type: String, required: false},
            vendor : {
                _id: { type: String, required: false },
                name: { type: String, required: false }
              },
            inPrice : {type: Number, required: false},
            outPrice : {type: Number, required: false},
            remark : {type: String, required: false},
            userId: { type: String, required: true }
        });
        schema.plugin(timestamps);
        return schema;
    }
}
let schema = mongooseConnection.model<IMaterialModel>('Materials', MaterialSchema.schema);
export = schema;
