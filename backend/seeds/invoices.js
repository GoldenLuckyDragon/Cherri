const Invoice = require('../models/invoice')

// {
//   "invoiceNumber": "exemple",
//   "amount": "1234",
//   "currency": "HKD",
//   "dueDate": "12/12/2020",
//   "status": "pending",
//   "customerCompanyName": "Marking",
//   "customerFirstname": "Mark",
//   "customerSurname": "King"
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
