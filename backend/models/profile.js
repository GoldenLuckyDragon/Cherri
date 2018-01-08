// const mongoose = require('./base')
// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId
//
// const ProfileSchema = Schema({
//   email: String,
//   password: String,
//   factory_name: String,
//   address: String,
//   hkid: String,
//   incorporation_certificate: String,
//   payment_method: String,
//   invoices: [{ type: ObjectId, ref: 'Invoice' }]
// })
//
// const Profile = mongoose.model('Final_Proj_Profile', ProfileSchema)

const Profile = [
  {
    factory_name: 'Jo Ablo',
    address: '123 Fake St',
    hkid: 'N-1191938'
  }
]

module.exports = Profile
