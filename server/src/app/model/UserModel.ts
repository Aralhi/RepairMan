import mongoose = require('mongoose');
import { Schema } from 'mongoose';

interface UserModel extends mongoose.Document {
    name: string;
    id: string;
    userId: string;
    _raw: Schema.Types.Mixed;
    _json: Schema.Types.Mixed;
}

export = UserModel;
