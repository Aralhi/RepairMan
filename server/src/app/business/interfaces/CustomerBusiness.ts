import BaseBusiness = require("./../BaseBusiness");
import ICustomerModel = require("./../../model/interfaces/HeroModel")

interface CustomerBusiness extends BaseBusiness<ICustomerModel> {
  
}
export = CustomerBusiness;
