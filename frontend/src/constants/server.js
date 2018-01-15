// set the url if we are in production environment
const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'

// update the top one to zeit directory.
? 'http://cherri.now.sh'
// or if in dev env use our api local host
: 'http://localhost:8080'

export default PAYMENT_SERVER_URL
