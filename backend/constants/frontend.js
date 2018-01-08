const FRONTEND_DEV_URLS = [ 'http://localhost:3000'];

const FRONTEND_PROD_URLS = [
	'https://www.GLD.com.hk'
]

// export the production or the dev urls
module.exports = process.env.NODE_ENV === 'production'
? FRONTEND_PROD_URLS
: FRONTEND_DEV_URLS;
