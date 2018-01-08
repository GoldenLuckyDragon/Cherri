// set the url if we are in production environment

const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
? 'http://myapidomain.com'
: 'http:localhost:8080';

export default PAYMENT_SERVER_URL;
