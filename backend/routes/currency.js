const Invoice = require('../models/invoice.js')

const currencyApi = app => {
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

  app.post('/profile', (req, res) => {
    Profile.create(req.body).then((profile) => {
      res.status(201).json(profile).end()
    })
  })
  return app
}

module.exports = currencyApi
