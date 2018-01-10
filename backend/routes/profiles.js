// include our models
const Profile = require('../models/profile.js')
const Invoice = require('../models/invoice.js')

// set up our routes for profile.
const profileApi = app => {
  app.get('/profile', (req, res) => {
    // find our profiles
    Profile.find({})
    // add our invoices
    .populate('invoices')
    // TODO line above isn't populating properly issue to be fixed
    .then(profiles => {
      console.log(`profiles: `, profiles)
      // render as json.
      res.json(profiles)
    })
    .catch(error => res.json({ error }))
  })
  return app
}

module.exports = profileApi
