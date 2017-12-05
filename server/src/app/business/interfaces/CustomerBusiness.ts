import BaseBusiness = require("./../BaseBusiness");
import ICustomerModel = require("./../../model/interfaces/CustomerModel")

interface CustomerBusiness extends BaseBusiness<ICustomerModel> {
  
}
export = CustomerBusiness;
