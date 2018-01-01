import IOrderModel = require('./../model/OrderModel');
import OrderSchema = require('./../dataAccess/schemas/OrderSchema');
import RepositoryBase = require('./BaseRepository');

class OrderRepository extends RepositoryBase<IOrderModel> {
  constructor() {
    super(OrderSchema);
  }
}
Object.seal(OrderRepository);
export = OrderRepository;
