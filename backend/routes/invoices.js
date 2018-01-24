// include our models
const Profile = require('../models/profile.js')
const User = require('../models/user.js')
const Invoice = require('../models/invoice.js')
const authMiddleware = require('../middleware/auth')

// set up our routes for invoice.
const invoiceApi = app => {
  // useful for now to be able to see all the invoices created during testing but maybe not the best way to go about it. WHAT IF YOU PUSH A NEW INVOICE INTO PROFILES SCHEMA DIRECTLY IN THE INVOICES ARRAY?
  app.get('/invoice', authMiddleware.requireJWT, (req, res) => {
    // find all our invoices
    Invoice.find()
    .then(invoices => {
      // console.log(`invoices: `, invoices)
      // render as json.
      res.json(invoices)
    })
    .catch(error => res.json({ error }))
  })

  app.post('/invoice', authMiddleware.requireJWT, (req, res) => {
    console.log(req.user._id)
    // Will need to be refactored as invoice will need to be associated with profile
    Invoice.create(req.body)
    .then(invoice => {
      return (
        User.findOne({'_id': `${req.user._id}`})
          .then(u => {
            console.log(u)
            console.log(u.account)
            Profile.findOne({'_id': `${u.account}`})
              .then(p => {
                p.invoices.push({'_id': `${invoice._id}`})
                p.save()
              })
          })
      )
    })
    .then((invoice) => {
      res.status(201).json(invoice).end()
    })
  })

  app.patch('/invoice', authMiddleware.requireJWT, (req, res) => {
    Invoice.findOneAndUpdate(({'_id': `${req.body._id}`}), req.body)
    .then(invoices => {
      console.log('invoice: ', invoices)
      // render as json.
      res.json(invoices)
    })
    .catch(error => res.json({ error }))
  })

  app.delete('/invoice', authMiddleware.requireJWT, (req, res) => {
    Invoice.findOneAndRemove({'_id': `${req.body._id}`})
    .then(invoices => {
      console.log('invoice: ', invoices)
      // render as json.
      res.json(invoices)
    })
    .catch(error => res.json({ error }))
  })
  // return back to invoiceApi, which is called in routes/index.js
  return app
}

module.exports = invoiceApi
