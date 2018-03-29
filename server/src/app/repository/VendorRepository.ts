import IVendorModel = require('./../model/VendorModel');
import VendorSchema = require('./../dataAccess/schemas/VendorSchema');
import RepositoryBase = require('./BaseRepository');

class VendorRepository  extends RepositoryBase<IVendorModel> {
    constructor () {
        super(VendorSchema);
    }
}

Object.seal(VendorRepository);
export = VendorRepository;