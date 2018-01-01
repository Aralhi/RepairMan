import ICustomerModel = require('./../model/CustomerModel');
import CustomerSchema = require('./../dataAccess/schemas/CustomerSchema');
import RepositoryBase = require('./BaseRepository');

class CustomerRepository  extends RepositoryBase<ICustomerModel> {
    constructor () {
        super(CustomerSchema);
    }
}

Object.seal(CustomerRepository);
export = CustomerRepository;