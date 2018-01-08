const mongoose = require('mongoose')
mongoose.Promise = Promise
const db = mongoose.connection

db.on('open', () => { console.log('Successful connection to MongoDB')});
mongoose.connect('mongodb://localhost/finalProfiles', { useMongoClient: true })

module.exports = mongoose
