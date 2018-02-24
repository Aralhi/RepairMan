import IStaffModel = require('./../model/StaffModel');
import StaffSchema = require('./../dataAccess/schemas/StaffSchema');
import RepositoryBase = require('./BaseRepository');

class StaffRepository  extends RepositoryBase<IStaffModel> {
    constructor () {
        super(StaffSchema);
    }
}

Object.seal(StaffRepository);
export = StaffRepository;
