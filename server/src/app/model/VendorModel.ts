import mongoose = require('mongoose');

interface VendorModel extends mongoose.Document {
    name: string;
    phone: string;
    address: string;
    remark: string;
}

export = VendorModel;
