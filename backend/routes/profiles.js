// include our models
const Profile = require('../models/profile.js')
const Invoice = require('../models/invoice.js')
const authMiddleware = require('../middleware/auth')

// test authentication no longer needed
// const authorize = (req, res, next) => {
//   if (req.user) {
//     next()
//   } else {
//     res.status(403).end()
//   }
// }

// set up our routes for profile.
const profileApi = app => {
  // due to way index.js is structure we have to seperate out our verbs within a profileApi function and return app

  // GET function, with authentication applied to it, can't access unless
  // token is present
  app.get('/profiles', authMiddleware.requireJWT, (req, res) => {
    // finds all our profiles for now. WILL NEED TO BE REFACTORED TO FIND ONE PORFILE ONLY WITH TERNIRY INCASE PROFILE DOESNT EXIST YET
    Profile.find({})
    // add our invoices
    .populate('invoices')
    .then(profiles => {
      console.log('profiles: ', profiles)
      // render as json.
      res.json(profiles)
    })
    .catch(error => res.json({ error }))
  })

  // create new Profile and save it to database. Authentication protected too so that only once someone signs up can they create a profile. ties in with user story.
  app.post('/profiles', authMiddleware.requireJWT, (req, res) => {
    Profile.create(req.body).then((profile) => {
      res.status(201).json(profile).end()
    })
  })

  // STILL TO BE DONE, PATCH FOR PROFILE EDITING
  // app.patch('/profile', authorize, (req, res) => {
    // const updateObject = req.body
    // const id = req.params.id
    // db.profile.update({_id: '5a55a570526f535e89dadcc1'}, { $set: {factoryName: 'BARRRRRRY'} })
  //   Profile.updateOne({_id: '5a55a570526f535e89dadcc1'}, { $set: {factoryName: 'BARRRRRRY'} })
    // console.log(updateObject)
    // console.log(id)
  // })

  // app returned to index.js
  return app
}

module.exports = profileApi
