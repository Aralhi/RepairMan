class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : 'mongodb://localhost:27017/whaleshark'
}
Object.seal(Constants);
export = Constants;