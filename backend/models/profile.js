// our profiles model using mongoose
const mongoose = require('./base')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// this is the schema
const FinalProfileSchema = Schema({
  email: String,
  password: String,
  factoryName: String,
  address: String,
  hkid: String,
  stripeId: String,
  incorporationCertificate: String,
  paymentMethod: String,
  invoices: [{ type: ObjectId, ref: 'Invoice' }]
})

const Profile = mongoose.model('finalProfile', FinalProfileSchema)

module.exports = Profile
