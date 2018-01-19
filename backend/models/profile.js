// our profiles model using mongoose
const mongoose = require('./base')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// "email": "exemple@hotmail.com"
// "factoryName": "exemple",
// "address": "exemple",
// "hkid": "exemple",
// "stripeId": "exemple",
// "incorporationCertificate": "exemple",
// "paymentMethod": "exemple",
// "invoices": [{ type: ObjectId, ref: 'Invoice' }]

const FinalProfileSchema = Schema({
  // format needed for required fields
  email: { type: String, required: true },
  password: String,
  factoryName: String,
  address: String,
  hkid: String,
  stripeId: String,
  incorporationCertificate: String,
  paymentMethod: String,
  invoices: [{ type: ObjectId, ref: 'Invoice' }]
})

const Profile = mongoose.models.Profile || mongoose.model('finalProfile', FinalProfileSchema)

module.exports = Profile
