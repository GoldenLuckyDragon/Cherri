// our profiles model using mongoose
const mongoose = require('./base')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const FinalProfileSchema = Schema({
  email: String,
  password: String,
  factory_name: String,
  address: String,
  hkid: String,
  incorporation_certificate: String,
  payment_method: String,
  invoices: [{ type: ObjectId, ref: 'Invoice' }]
})

const Profile = mongoose.model('finalProfile', FinalProfileSchema)

module.exports = Profile
