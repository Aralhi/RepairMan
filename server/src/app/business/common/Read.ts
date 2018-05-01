import express = require('express');
interface Read<T> {
    retrieve: (req: express.Request, callback: (error: any, result: T) => void) => void ;
    findById: (req: express.Request, _id: string, callback: (error: any, result: T) => void) => void;
}

export = Read;