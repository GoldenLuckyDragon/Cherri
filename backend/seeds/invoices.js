const Invoice = require('../models/invoice')

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
