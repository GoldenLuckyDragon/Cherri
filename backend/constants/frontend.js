// set up urls that can dynamically change with production
const FRONTEND_DEV_URLS = ['http://localhost:3000']

const FRONTEND_PROD_URLS = [
  'https://cherri-finance.netlify.com'
]

// export the production or the dev urls
module.exports = process.env.NODE_ENV === 'production'
? FRONTEND_PROD_URLS
: FRONTEND_DEV_URLS
