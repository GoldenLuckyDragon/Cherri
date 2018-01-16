// include our models
const Profile = require('../models/profile.js')
const Invoice = require('../models/invoice.js')

const authorize = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.status(403).end()
  }
}

// set up our routes for profile.
const profileApi = app => {
  app.get('/profile', authorize, (req, res) => {
    // find our profiles
    Profile.find({})
    // add our invoices
    .populate('invoices')
    .then(profiles => {
      console.log(`profiles: `, profiles)
      // render as json.
      res.json(profiles)
    })
    .catch(error => res.json({ error }))
  })

  app.get('/invoice', (req, res) => {
    // find all our invoices
    Invoice.find({})
    .then(invoices => {
      console.log(`invoices: `, invoices)
      // render as json.
      res.json(invoices)
    })
    .catch(error => res.json({ error }))
  })

  app.post('/profile', authorize, (req, res) => {
    Profile.create(req.body).then((profile) => {
      res.status(201).json(profile).end()
    })
  })

  app.post('/invoice', (req, res) => {
    Invoice.create(req.body).then((invoice) => {
      res.status(201).json(invoice).end()
    })
  })

  // app.patch('/profile', authorize, (req, res) => {
  //   // const updateObject = req.body
  //   // const id = req.params.id
  //   // db.profile.update({_id: '5a55a570526f535e89dadcc1'}, { $set: {factoryName: 'BARRRRRRY'} })
  //   Profile.updateOne({_id: '5a55a570526f535e89dadcc1'}, { $set: {factoryName: 'BARRRRRRY'} })
  //   // console.log(updateObject)
  //   // console.log(id)
  // })

  return app
}

module.exports = profileApi
