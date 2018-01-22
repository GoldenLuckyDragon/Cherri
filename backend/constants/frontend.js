// set up urls that can dynamically change with production
const FRONT_END_URL = `${process.env.NODE_ENV}` === 'production'
? process.env.FRONTEND_PROD_URLS
: process.env.FRONTEND_DEV_URLS

// export the production or the dev urls
module.exports = FRONT_END_URL
