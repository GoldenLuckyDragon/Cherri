// include our stripe
const stripe = require('../constants/stripe')

// TODO separate into globals
// // this is from stripe website
var CLIENT_ID = 'ca_BjHuFmrEKXcxfPWEGG7eFkFienrbbAs5'
//
var TOKEN_URI = 'https://connect.stripe.com/oauth/token'
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize'

var request = require('request')

// after the stripe goes through it alerts (this is where we make recipts)
const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr })
  } else {
    res.status(200).send({ success: stripeRes })
  }
}

// payment routes
const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe Checkout Server!', timestamp: new Date().toISOString() })
  })

  // run post stripe charges
  app.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res))
  })

  // express endpoint for redirect
  app.get('/users/auth/stripe_connect', (req, res) => {
    console.log('made it')
    console.log(req.query.code)

    var code = req.query.code

// Make /oauth/token endpoint POST request
    request.post({
      url: TOKEN_URI,
      form: {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        code: code,
        client_secret: stripe.STRIPE_SECRET_KEY
      }
    }, function (err, r, body) {
      var accessToken = JSON.parse(body).access_token
      // Do something with your accessToken
      console.log(accessToken)
      // For demo's sake, output in response:
      res.send({ 'Your Token': accessToken })
    })
  })

  return app
}

module.exports = paymentApi
