// keeping our routes modular by making them separate files.

// define the route files
const paymentApi = require('./payment')
const profileApi = require('./profiles')
const invoiceApi = require('./invoices')
const userApi = require('./users')
// const currencyApi = require('./currency')

// run the routes through the app, which is imported in index.js as express
const configureRoutes = app => {
  paymentApi(app)
  profileApi(app)
  invoiceApi(app)
  userApi(app)
}

module.exports = configureRoutes
