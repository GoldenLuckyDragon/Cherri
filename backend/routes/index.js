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

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'cherri.finance@gmail.com',
//   from: 'cherri.finance@gmail.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// }
// sgMail.send(msg)

module.exports = configureRoutes
