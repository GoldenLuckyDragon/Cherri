// keeping our routes modular by making them separate files.

// define the route files
const paymentApi = require('./payment')
const profileApi = require('./profiles')
const currencyApi = require('./currency')
// run the routes through the app
const configureRoutes = app => {
  paymentApi(app)
  profileApi(app)
  currencyApi(app)
}

module.exports = configureRoutes
