// include our models
const User = require('../models/user.js')
const Profile = require('../models/profile.js')
// we add invoices because it is used on our profiles .populate
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
    Profile.find()
    // add our invoices
    .populate('invoices')
    .then(profiles => {
      console.log('profiles: ', profiles)
      // render as json.
      res.json(profiles)
    })
    .catch(error => res.json({ error }))
  })

  // create new Profile and save it to database. It's Authenticated so that only once someone signs up they have permission to create a profile. ties in with user story.
  app.post('/profiles', authMiddleware.requireJWT, (req, res) => {
    // console.log(req.user._id)
    // create a new profile
    Profile.create(req.body)
    .then((profile) => {
      return (
        User.findOne({'_id': `${req.user._id}`})
        .then(u => {
          u.account = profile._id
          u.save()
        })
      )
    })
      .then((profile) => {
      // 201 created server code and then res.json is set to the new profile
        res.status(201).json(profile).end()
      })
  })

  app.patch('/profiles', authMiddleware.requireJWT, (req, res) => {
    Profile.findOneAndUpdate(({'_id': `${req.user.account}`}), req.body)
    .then(profiles => {
      console.log('profile: ', profiles)
      // render as json.
      res.json(profiles)
    })
    .catch(error => res.json({ error }))
  })
}

// export our profileApi
module.exports = profileApi
