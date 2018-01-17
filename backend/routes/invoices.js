// include our models
const Invoice = require('../models/invoice.js')

// set up our routes for invoice.
const invoiceApi = app => {
  // useful for now to be able to see all the invoices created during testing but maybe not the best way to go about it. WHAT IF YOU PUSH A NEW INVOICE INTO PROFILES SCHEMA DIRECTLY IN THE INVOICES ARRAY?
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

  app.post('/invoice', (req, res) => {
    // Will need to be refactored as invoice will need to be associated with profile
    Invoice.create(req.body).then((invoice) => {
      res.status(201).json(invoice).end()
    })
  })

  return app
}

module.exports = invoiceApi
