import express = require('express')
import path = require('path')

import HeroRoutes = require('../routes/HeroRoutes')
import CustomerRoutes = require('../routes/CustomerRoutes')

var app = express()

class Routes {
  get routes() {
    app.use('/', new HeroRoutes().routes)
    app.use('/', new CustomerRoutes().routes)

    return app
  }
}
export = Routes
