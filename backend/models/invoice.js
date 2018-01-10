const mongoose = require('./base')
const Schema = mongoose.Schema

const invoiceSchema = Schema({
  invoiceNumber: String,
  amount: Number,
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
// mongoose.models.Invoice ||
 mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice
