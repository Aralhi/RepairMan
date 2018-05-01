import express = require('express');
interface Write<T> {
    create: (req: express.Request, item: T, callback: (error: any, result: any ) => void) => void;
    update: (req: express.Request, _id: string, item: T, callback: (error: any, result: any) => void) => void ;
    delete: (req: express.Request, _id: string, callback: (error: any, result: any) => void) => void;

}

export = Write;