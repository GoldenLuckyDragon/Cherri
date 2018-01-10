// include our stripe
const { stripe, STRIPE_SECRET_KEY } = require('../constants/stripe')

// TODO separate into globals
// // this is from stripe website
const CLIENT_ID = 'ca_BjHuFmrEKXcxfPWEGG7eFkFienrbbAs5'
//
const TOKEN_URI = 'https://connect.stripe.com/oauth/token'
const AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize'

const request = require('request')

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

    const code = req.query.code
    console.log('key: ', STRIPE_SECRET_KEY)
    // Make /oauth/token endpoint POST request
    request.post({
      url: TOKEN_URI,
      form: {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        code: code,
        client_secret: STRIPE_SECRET_KEY
      }
    }, function (err, r, body) {
      var accessToken = JSON.parse(body).access_token
      // Do something with your accessToken
      console.log('r ', r.body)
      // console.log('error', err)
      console.log('your access token ', accessToken)
      // For demo's sake, output in response:
      res.send({ 'Your Token': accessToken })
    })
  })

  return app
}

module.exports = paymentApi
