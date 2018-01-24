/* STRIPE Customer Process (Our paymentApi)
  Customer clicks on special url with our client_id (found in connect/settings/dashboard)
  client then fills in stripe form to make an account or signs in with existing.
  redirect to our redirect_URI (inside connect/settings/dashboard ) on A GET

  IMPORTANT this cannot be localhost, use NGROK to get a https public url.

  Stripe sends back a authorisation code, return that code to stripe on a POST.
  (using request) include your secret_key.

  Now stripe will send you back an access_token, which will contain your
  account details and you can start to create an account.

  make sure NODE_ENV is set to DEV in package json

*/
// pop up notifications
const notifier = require('node-notifier')
const authMiddleware = require('../middleware/auth')
// Import our FRONTend endpoint
const FRONT_END_URL = require('../constants/frontend')

// include our stripe
const { stripe, userEmail, STRIPE_SECRET_KEY } = require('../constants/stripe')

// require our Profiles
const Profile = require('../models/profile.js')

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

// payment routes
const paymentApi = app => {
  // add body parser so we can read our data from stripe
  app.use(require('body-parser').urlencoded({extended: false}))

  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe Checkout Server!', timestamp: new Date().toISOString() })
  })

  // middleware for our charges endpoint
  app.get('/charges', authMiddleware.requireJWT, (req, res, next) => {
  }, function (error, req, res, body) {
    if (error) {
      console.log((error))
      return
    }
    console.log('NOW AT THE CHARGES PAGE YOUR EMAIL IS :', userEmail)
  })

  // This part is for stripe Checkout
  app.post('/', authMiddleware.requireJWT, (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res))
  })

  // CONNECT  endpoint for redirect
  app.get('/users/auth/stripe_connect', (req, res, next) => {
    // FIXME - edge cases where no referrer
    let userEmail = ''
    if (req.headers.hasOwnProperty('referer')) {
      console.log('Headers found with referer: ', req.headers)
      userEmail = req.headers.referer.split('&')[3].split('=')[1]
    } else {
      console.log('No referer found in headers. Headers are: ', req.headers.referer)
      res.redirect(`${FRONT_END_URL}/charges`)
    }

    // console.log('in stripe_connect with req: ', req)
    // console.log('in stripe_connect with req._passport: ', req._passport)
    console.log('req.headers.referer: ', userEmail)
    const code = req.query.code

    // Make /oauth/token endpoint POST request
    request.post({
      url: TOKEN_URI,
      form: {
        grant_type: 'authorization_code',
        client_id: `${process.env.CLIENT_ID}`,
        code: code,
        client_secret: STRIPE_SECRET_KEY
      }
    }, function (err, r, body) {
      // var accessToken = JSON.parse(body).access_token
      var parsedbody = JSON.parse(body)
      // their stripeID
      var stripeUserId = parsedbody.stripe_user_id
      console.log('error: ', err)
      // save the stripe user id
      console.log('stripe_user_id: ', stripeUserId)
      // res.redirect(`${FRONT_END_URL}/charges`)
      // // find our profile by id and inject our stripe user id.
      Profile.findOneAndUpdate({'email': userEmail}, {$set: { 'stripeId': stripeUserId }}, function (err, profile) {
        // throw an error if any
        if (err) { throw err } else {
          console.log(`INJECTED`)
          // notifier.notify(`You've Connected To Stripe`)
          notifier.notify({
            title: 'Cherri',
            message: `You've Connected To Stripe`
          })
        }
      })
    })
    res.redirect(`${FRONT_END_URL}/dashboard`)
  })
  return app
}

module.exports = paymentApi
