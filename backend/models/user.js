// our users model using mongoose
// best to seperate out from profiles as then, on sign up not all fields need to be filled out only email and password.
const mongoose = require('./base')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// make the schema basic because Passport-local-mongoose will add fields automatically
const UserSchema = mongoose.Schema({
  profile: { type: ObjectId, ref: 'Profile' }
})

// extend the schema with our Passport plugin
UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  session: false
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

module.exports = User
