const Invoice = require('../models/invoice')

// {
//   "invoiceNumber": "hkd",
//   "amount": "123",
//   "currency": "hkd",
//   "offerAmount": "123",
//   "dueDate": "12/12/2020",
//   "expiryDate": "12/12/2020",
//   "status": "hkd",
//   "customerCompanyName": "hkd",
//   "customerFirstname": "hkd",
//   "customerSurname": "hkd",
//   "salePurchaseAgreement": "hkd",
//   "invoiceUpload": "hkd"
// }

Invoice.create([
  {
    invoiceNumber: 'MKT-001-28t',
    amount: 2553.50,
    currency: 'USD',
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
