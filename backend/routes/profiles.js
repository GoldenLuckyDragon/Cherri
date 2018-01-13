// include our models
const Profile = require('../models/profile.js')
const Invoice = require('../models/invoice.js')
const mongoose = require('../models/base.js')
const db = mongoose.connection
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

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

  app.post('/profile', (req, res) => {
    Profile.create(req.body).then((profile) => {
      res.status(201).json(profile).end()
    })
  })

  app.patch('/profile/:id', (req, res) => {
    const updateObject = req.body
    const id = req.params.id
    db.profile.update({_id: '5a5706dd38a4d867a7bda36a'}, { $set: {factoryName: 'BARRRRRRY'} })
    // db.profile.update({_id: ObjectId(id)}, {$set: updateObject})
    console.log(updateObject)
    console.log(id)
  })

  return app
}

module.exports = profileApi
