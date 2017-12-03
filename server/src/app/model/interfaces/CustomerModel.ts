import mongoose = require("mongoose");

interface CustomerModel extends mongoose.Document {
    name: string;
    carNumber: string;
    phone: number;
    carType: string;
    company: number;
    remark: string;
}

export = CustomerModel;