// include our models
const User = require('../models/user.js')
// const Profile = require('../models/profile.js')
// const Invoice = require('../models/invoice.js')

// set up our routes for profile.
const userApi = app => {
  // due to way index.js is structure we have to seperate out our verbs within a profileApi function and return app

  // GET function, with authentication applied to it, can't access unless
  // token is present
  app.get('/users', (req, res) => {
    // finds all our profiles for now. WILL NEED TO BE REFACTORED TO FIND ONE PORFILE ONLY WITH TERNIRY INCASE PROFILE DOESNT EXIST YET
    User.find()
    // add our invoices
    // .populate('account')
    // .populate('invoices')
    .then(users => {
      console.log('users: ', users)
      // render as json.
      res.json(users)
    })
    .catch(error => res.json({ error }))
  })

  // create new Profile and save it to database. Authentication protected too so that only once someone signs up can they create a profile. ties in with user story.

  // app returned to index.js
  return app
}

module.exports = userApi
