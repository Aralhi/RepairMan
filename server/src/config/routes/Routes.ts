import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import CustomerRoutes = require('../routes/CustomerRoutes');
import OrderRoutes = require('../routes/OrderRouters');
import StaffRoutes = require('../routes/StaffRoutes');

let app = express();

class Routes {
  get routes() {
    app.use('/', new HeroRoutes().routes);
    app.use('/', new CustomerRoutes().routes);
    app.use('/', new OrderRoutes().routes);
    app.use('/', new StaffRoutes().routes);

    return app;
  }
}
export = Routes;
