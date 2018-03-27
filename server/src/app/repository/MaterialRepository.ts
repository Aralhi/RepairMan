import IMaterialModel = require('./../model/MaterialModel');
import MaterialSchema = require('./../dataAccess/schemas/MaterialSchema');
import RepositoryBase = require('./BaseRepository');

class MaterialRepository  extends RepositoryBase<IMaterialModel> {
    constructor () {
        super(MaterialSchema);
    }
}

Object.seal(MaterialRepository);
export = MaterialRepository;