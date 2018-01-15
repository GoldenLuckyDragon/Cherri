// set up our mongodb based on environment
const MONGO_URI = process.env.NODE_ENV === 'production'
? `${process.env.MONGO_PROD_URL}`
: 'mongodb://localhost/finalProfiles'

// Include mongoose and set up our connection
const mongoose = require('mongoose')
mongoose.Promise = Promise
const db = mongoose.connection

db.on('open', () => { console.log('Successful connection to MongoDB') })

// connect to our online Mongo
mongoose.connect(MONGO_URI, { useMongoClient: true })

module.exports = mongoose
