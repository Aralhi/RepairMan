import mongoose = require('mongoose');

interface MaterialModel extends mongoose.Document {
    name: string;
    no: string;
    guige: string;
    unit: string;
    vendor: string;
    remark: string;
}

export = MaterialModel;
