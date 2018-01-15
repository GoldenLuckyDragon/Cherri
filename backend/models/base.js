// set up constant mongo url
// const MONGO_URI = process.env.NODE_ENV === 'production'
// ? process.env.MONGO_PROD_URI
// : process.env.MONGO_DEV_URI

const MONGO_URI = 'mongodb://cherri:finance@ds255797.mlab.com:55797/cherrifinance'

// Include mongoose and set up our connection
const mongoose = require('mongoose')
mongoose.Promise = Promise
const db = mongoose.connection

db.on('open', () => { console.log('Successful connection to MongoDB') })

// connect to our online Mongo
mongoose.connect(MONGO_URI, { useMongoClient: true })

module.exports = mongoose
