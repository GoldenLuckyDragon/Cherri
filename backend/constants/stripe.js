// run stripe with require stripe (then secret key )
// done this is two steps, require and then add the stripe key.
const configureStripe = require('stripe')

// set up stripe secret key with dotenv process allows us to change on production
const STRIPE_SECRET_KEY = `${process.env.NODE_ENV}` === 'production'
? process.env.STRIPE_PROD_SECRET
: process.env.STRIPE_DEV_SECRET

// run stripe with our secret key.
const stripe = configureStripe(STRIPE_SECRET_KEY)

// export our stripe and secret key
module.exports = {
  stripe,
  STRIPE_SECRET_KEY
}
