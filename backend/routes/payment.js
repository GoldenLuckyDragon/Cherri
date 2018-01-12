// include our stripe
const { stripe, STRIPE_SECRET_KEY } = require('../constants/stripe')

// require our Profiles
const Profile = require('../models/profile.js')

// TODO separate into globals
// // this is from stripe website
const CLIENT_ID = 'ca_BjHuFmrEKXcxfPWEGG7eFkFienrbbAs5'
const TOKEN_URI = 'https://connect.stripe.com/oauth/token'

// include request to make our post request to stripe
const request = require('request')

// after the stripe goes through it alerts (this is where we make recipts)
const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr })
  } else {
    res.status(200).send({ success: stripeRes })
  }
}

/* STRIPE Customer Process (OUR paymentApi)
  Customer clicks on special url with our client_id (to be updated)
  client then fills in stripe form to make an account or signs in with existing.
  redirect to our redirect_URI (inside connect/settings/dashboard ) on A GET

  IMPORTANT this cannot be localhost, use NGROK to get a https public url.

  Stripe sends back a authorisation code, return that code to stripe on a POST.
  (using request) include your secret_key.

  Now stripe will send you back an access_token, which will contain your
  account details and you can start to create an account.

  make sure NODE_ENV is set to DEV in package json

*/

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
      // the access token
      var accessToken = JSON.parse(body).access_token

      // their stripeID
      var stripeUserId = JSON.parse(body).stripe_user_id

      // Do something with your accessToken
      console.log(' ')
      console.log(' ')
      console.log(' ')
      console.log('error', err)
      // save the stripe user id
      console.log('stripe_user_id: ', stripeUserId)
      console.log(' ')
      console.log(' ')
      console.log(' ')

    //   collection.findOneAndUpdate({_id: "12"}, {$set: {protocol: "http"}}, {upsert: true}, function(err,doc) {
    //   if (err) { throw err; }
    //   else { console.log("Updated"); }
    // });

    // 5a58221b88603d1b0d76bd27

      Profile.findOneAndUpdate({'_id': '5a58221b88603d1b0d76bd27'}, {$set: {'incorporationCertificate': stripeUserId}}, function (err, profile) {
        if (err) { throw err } else { console.log('updated') }
      })
    })
    res.redirect('/profile')
  })

  return app
}

module.exports = paymentApi
