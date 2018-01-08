const Invoice = require('../models/invoice')

// const invoiceSchema = Schema({
//   invoice_number: String,
//   amount: Number,
//   offer_amount: Number,
//   due_date: Date,
//   expiry_date: Date,
//   status: String,
//   customer_company_name: String,
//   customer_firstname: String,
//   customer_surname: String,
//   sale_purchase_agreement: String,
//   invoice_upload: String
// })

Invoice.create([
  {
    invoice_number: 'MKT-001-28t',
    amount: 2553.50,
    offer_amount: 2298.15,
    due_date: '2018-05-01',
    expiry_date: '2018-02-01',
    status: 'Pending',
    customer_company_name: 'Walmart',
    customer_firstname: 'Mary',
    customer_surname: 'Jones',
    sale_purchase_agreement: '',
    invoice_upload: ''
  }
])
