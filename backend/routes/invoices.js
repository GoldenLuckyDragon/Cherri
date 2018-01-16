// include our models
const Invoice = require('../models/invoice.js')
const mongoose = require('../models/base.js')
const db = mongoose.connection
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// set up our routes for invoice.
const invoiceApi = app => {
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
    Invoice.create(req.body).then((invoice) => {
      res.status(201).json(invoice).end()
    })
  })

  return app
}

module.exports = invoiceApi
