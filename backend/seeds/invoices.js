const Invoice = require('../models/invoice')

// const invoiceSchema = Schema({
//   invoice_number: String,
//   amount: Number,
//   offer_amount: Number,
//   due_date: Date,
//   expiry_date: Date,
//   status: String,
//   customerCompany_name: String,
//   customerFirstname: String,
//   customer_surname: String,
//   sale_purchase_agreement: String,
//   invoice_upload: String
// })

Invoice.create([
  {
    invoiceNumber: 'MKT-001-28t',
    amount: 2553.50,
    offerAmount: 2298.15,
    dueDate: '2018-05-01',
    expiryDate: '2018-02-01',
    status: 'Pending',
    customerCompanyName: 'Walmart',
    customerFirstname: 'Mary',
    customerSurname: 'Jones',
    salePurchaseAgreement: '',
    invoiceUpload: ''
  }
])
