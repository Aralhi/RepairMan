import mongoose = require('mongoose');

interface MaterialModel extends mongoose.Document {
    name: string;
    carType: string;
    count: string;
    unit: string;
    vendor: string;
    remark: string;
}

export = MaterialModel;
