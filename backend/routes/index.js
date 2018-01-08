const paymentApi = require('./payment')
const profileApi = require('./profiles')

const configureRoutes = app => {
  paymentApi(app)
  profileApi(app)
}

module.exports = configureRoutes
