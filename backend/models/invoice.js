const mongoose = require('./base')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const invoiceSchema = Schema({
  factory: { type: ObjectId, ref: 'Profile' },
  invoice_number: Number,
  amount: Number,
  offer_amount: Number,
  due_date: Date,
  expiry_date: Date,
  status: String,
  customer_company_name: String,
  customer_firstname: String,
  customer_surname: String,
  sale_purchase_agreement: String,
  invoice_upload: String
})

const Invoice =
// mongoose.models.Invoice ||
 mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice
