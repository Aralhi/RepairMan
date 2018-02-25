import DataAccess = require('../DataAccess');
import IOrderModel = require('./../../model/OrderModel');
let timestamps = require('mongoose-timestamp');

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class OrderSchema {
  static get schema() {
    let schema = mongoose.Schema({
      name: { type: String, required: true },
      no: { type: String, required: true },
      subject: { type: String, required: false },
      status: { type: String, required: true },
      progress: { type: Number, required: false },
      customer: {
        name: { type: String, required: true },
        carNumber: { type: String, required: false },
        phone: { type: String, required: false },
        carType: { type: String, required: false },
        company: { type: String, required: false },
        remark: { type: String, required: false }
      },
      subjectsCost: { type: Number, required: false },
      materialsCost: { type: Number, required: false },
      orderCost: { type: Number, required: false },
      assignStaffs: [
        {
          _id: { type: String, required: false },
          name: { type: String, required: false },
          phone: { type: String, required: false },
          address: { type: String, required: false },
          remark: { type: String, required: false }
        }
      ],
      assignDate: {type: Date, require: false},
      repairSubjects: [
        {
          id: { type: Number, required: false },
          name: { type: String, required: false },
          code: { type: String, required: false },
          staff: { type: String, required: false },
          cost: { type: Number, required: false },
          costUnit: { type: String, required: false }
        }
      ],
      repairMaterials: [
        {
          id: { type: Number, required: false },
          name: { type: String, required: false },
          code: { type: String, required: false },
          spec: { type: String, required: false },
          count: { type: Number, required: false },
          costUnit: { type: String, required: false },
          outPrice: { type: Number, required: false },
          unit: { type: String, required: false }
        }
      ]
    });
    schema.plugin(timestamps);
    return schema;
  }
}
let schema = mongooseConnection.model<IOrderModel>(
  'Orders',
  OrderSchema.schema
);
export = schema;
