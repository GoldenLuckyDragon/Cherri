// keeping our routes modular by making them separate files.

// define the route files
const paymentApi = require('./payment')
const profileApi = require('./profiles')
const invoiceApi = require('./invoices')
// const currencyApi = require('./currency')

// run the routes through the app
const configureRoutes = app => {
  paymentApi(app)
  profileApi(app)
  invoiceApi(app)
}

module.exports = configureRoutes
