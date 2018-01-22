// set up our model for the invoices
const mongoose = require('./base')
const Schema = mongoose.Schema

const invoiceSchema = Schema({
  invoiceNumber: { type: String, required: true },
  amount: Number,
  currency: String,
  offerAmount: Number,
  dueDate: Date,
  expiryDate: Date,
  status: String,
  customerCompanyName: String,
  customerFirstname: String,
  customerSurname: String,
  salePurchaseAgreement: String,
  invoiceUpload: String
})

const Invoice =
  mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice
