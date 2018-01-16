import DataAccess = require('../DataAccess');
import IOrderModel = require('./../../model/OrderModel');
import { Number } from 'core-js/library/web/timers';
let timestamps = require('mongoose-timestamp');

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class OrderSchema {
  static get schema() {
    let schema = mongoose.Schema({
      name: { type: String, required: true },
      no: { type: String, required: true },
      subject: { type: String, required: false },
      customer: {
        name: { type: String, required: true },
        carNumber: { type: String, required: false },
        phone: { type: String, required: false },
        carType: { type: String, required: false },
        company: { type: String, required: false },
        remark: { type: String, required: false },
        createdAt: { type: Date, required: false },
        updatedAt: { type: Date, required: false },
        _id: { type: String, required: false }
      },
      repairSubjects: [
        {
          name: { type: String, required: false },
          code: { type: String, required: false },
          staff: { type: String, required: false },
          cost: { type: String, required: false },
          costUnit: { type: String, required: false }
        }
      ],
      repairMaterials: [
        {
          name: { type: String, required: false },
          code: { type: String, required: false },
          spec: { type: String, required: false },
          count: { type: String, required: false },
          costUnit: { type: String, required: false },
          outPrice: { type: String, required: false },
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
