// allow us to change our keys based on evironment and keep them secret in gitignore.
const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? process.env.REACT_APP_STRIPE_PROD_PUBLISH
: process.env.REACT_APP_STRIPE_DEV_PUBLISH

export default STRIPE_PUBLISHABLE
