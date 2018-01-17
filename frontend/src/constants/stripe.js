// allow us to change our keys based on evironment and keep them secret in gitignore.
const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? process.env.REACT_APP_STRIPE_PROD_PUBLISH
: process.env.REACT_APP_STRIPE_DEV_PUBLISH

const STRIPE_URL = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_BjHuFmrEKXcxfPWEGG7eFkFienrbbAs5&scope=read_write'

module.exports = {
  STRIPE_PUBLISHABLE,
  STRIPE_URL
}
