const Profile = require('../models/profile.js')

const profileApi = app => {
  app.get('/profile', (req, res) => {
    res.send({Profile})
    // Profile.find()
    // .populate('director')
    // .then(movies => res.json(movies))
    // .catch(error => res.json({ error }))
  })
  return app
}

// const profileApi = app => {
//   app.get('/profile', (req, res) => {
//     res.send({message: 'profile'})
//   })
//
//   return app
// }

module.exports = profileApi

// .get('/profile', (req, res) => {
//   Profile.find()
//   .populate('invoices')
//   .then(profiles => res.json(profiles))
//   .catch(error => res.json({ error }))
// }
