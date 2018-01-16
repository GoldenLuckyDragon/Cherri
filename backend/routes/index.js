// keeping our routes modular by making them separate files.

// define the route files
const paymentApi = require('./payment')
const profileApi = require('./profiles')
const invoiceApi = require('./invoices')
// run the routes through the app
const configureRoutes = app => {
  paymentApi(app)
  profileApi(app)
  invoiceApi(app)
}

module.exports = configureRoutes
