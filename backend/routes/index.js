// keeping our routes modular by making them separate files.

// define the route files
const paymentApi = require('./payment')
const profileApi = require('./profiles')

// run the routes through the app
const configureRoutes = app => {
  paymentApi(app)
  profileApi(app)
}

module.exports = configureRoutes
