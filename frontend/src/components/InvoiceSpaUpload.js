import React from 'react'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'
var cloudinary = require('cloudinary')

require('dotenv').config()

// Set a constant of invoice to be the invoice ID that was passed in from the InvoiceForm page.

export default function InvoiceSpaUpload ({
  users,
  profile
  }) {
  const account = profile.find((p) => p._id === users.account._id)
  const invoice = account.invoices.slice(-1)[0]
  const invoiceId = invoice._id
  function handleUploadClick (event) {
    window.cloudinary.openUploadWidget({cloud_name: 'Cherri', upload_preset: 'invoices', public_id: `${invoiceId}_spa`, folder: 'invoices', tags: ['spa']},
      function (error, result) { console.log(error, result) })
  }
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <form>
          <a classname='btn-blue' onClick={handleUploadClick} id='upload_widget_opener'>Upload Your Signed Sale and Purchase Agreement</a>
          <br />(download from <a href='http://res.cloudinary.com/cherri/image/upload/v1516149513/Accounts_Receivable_Purchase_Agreement.docx_cxglxl.pdf' target='_blank'>here)</a>
          <br />
          <a href={`/dashboard`} className='btn-blue'>Submit</a>
        </form>
      </Jumbotron>
    </div>
  )
}
