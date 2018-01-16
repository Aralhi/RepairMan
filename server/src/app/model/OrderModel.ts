import mongoose = require('mongoose');

interface OrderModel extends mongoose.Document {
  name: string;
  no: string;
  subject: string;
  customer: {
    name: string;
    carNumber: string;
    phone: string;
    carType: string;
    company: string;
    remark: string;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
  };
  repairSubjects: [
    {
      name: string;
      code: string;
      staff: string;
      cost: number;
      costUnit: string;
    }
  ];
  repairMaterials: [
    {
      name: string;
      code: string;
      spec: string;
      count: number;
      costUnit: string;
      outPrice: number;
      unit: string;
    }
  ];
}
export = OrderModel;
