import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'
import { render } from 'react-dom'
var cloudinary = require('cloudinary')

require('dotenv').config()

// Set a constant of invoice to be the invoice ID that was passed in from the InvoiceForm page.

export default function InvoiceUpload ({
  users,
  profile,
  invoices
  }) {
  const account = profile.find((p) => p._id === users.account._id)
  const invoice = account.invoices.slice(-1)[0]
  const invoiceId = invoice._id
  function handleUploadClick (event) {
    window.cloudinary.openUploadWidget({cloud_name: 'Cherri', upload_preset: 'invoices', public_id: `${invoiceId}_inv`, folder: 'invoices', tags: ['invoice']},
      function (error, result) { console.log(error, result) })
  }
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <form>
          <a classname='btn-blue' onClick={handleUploadClick} id='upload_widget_opener'>Upload Your Invoice</a>
          <br />
          <a href={`/invoice/spaupload`} className='btn-blue'>Submit</a>
        </form>
      </Jumbotron>
    </div>
  )
}
