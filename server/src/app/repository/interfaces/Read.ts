import express = require('express');

interface Read<T> {
    retrieve: (req: express.Request, callback: (error: any, result: any) => void) => void;
    findById: (eq: express.Request, id: string, callback: (error: any, result: T) => void) => void;
}

export = Read;