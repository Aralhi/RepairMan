import mongoose = require('mongoose');

interface CustomerModel extends mongoose.Document {
    name: string;
    carNumber: string;
    phone: string;
    carType: string;
    company: string;
    remark: string;
    userId: string;
}

export = CustomerModel;
