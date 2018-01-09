const Profile = require('../models/profile.js')
const Invoice = require('../models/invoice.js')

const profileApi = app => {
  app.get('/profile', (req, res) => {
    Profile.find({})
    .populate('invoices')
    // line above isn't populating properly issue to be fixed
    .then(profiles => {
      console.log(`profiles: `, profiles)
      res.json(profiles)
    })
    .catch(error => res.json({ error }))
  })
  return app
}

module.exports = profileApi
