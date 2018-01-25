import React from 'react'
import {Link} from 'react-router-dom'
import {Image, CloudinaryContext} from 'cloudinary-react'
import '../App.css'
import Navigation from '../components/navbar'
import { Jumbotron, Table } from 'react-bootstrap'
import Logo from '../components/Logo'
import * as crud from '../api/invoices'

var cloudinary = require('cloudinary')
const notifier = require('node-notifier')

// deleting function called on button click
const deleteInvoice = (invoice) => {
  crud.supprimer(invoice)
  alert('Invoice Deleted')
}

export default function InvoiceDetails ({
  users,
  email,
  invoice
}) {
  const invoiceid = invoice._id
  const invoiceImg = `invoices/${invoiceid}_inv.png`
  const spaImg = `invoices/${invoiceid}_spa.png`
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <br />
        <div className='card card-shadow'>
          <br />
          <span>Invoice Number: {invoice.invoiceNumber}</span>
          <hr />
          <span>Status: {invoice.status}</span>
          <hr />
          <span>Invoice Amount: {invoice.currency}{invoice.amount}</span>
          <hr />
          <span>Offer Amount: {invoice.offerAmount}</span>
          <hr />
          <span>Due Date: {invoice.dueDate}</span>
          <hr />
          <span>Offer Expiry Date: {invoice.expiryDate}</span>
          <hr />
          <span>Customer Company Name: {invoice.customerCompanyName}</span>
          <hr />
          <span>Customer First Name: {invoice.customerFirstname}</span>
          <hr />
          <span>Customer Surname: {invoice.customerSurname}</span>
          <hr />
          <span>Invoice Upload:</span>
          {/* Show the images from Cloudinary with the invoice ID number */}
          <CloudinaryContext cloudName='cherri'>
            <Image publicId={invoiceImg} width='300' />
          </CloudinaryContext>
          <hr />
          Signed Sale and Purchase Agreement:
          <CloudinaryContext cloudName='cherri'>
            <Image publicId={spaImg} width='300' />
          </CloudinaryContext>
          <span>
            <a href={`/invoice/${invoiceid}/edit`}><button type='submit' className='btn-blue'>Edit Invoice</button></a>
            &nbsp;
            {/* DELETE BUTTON  */}
            {/* <button onSubmit={deleteInvoice(invoice)} className='btn-blue'>Delete by James</button> */}

            <a href={`/invoice/${invoiceid}/delete`}><button type='submit' className='btn-blue'>Delete Invoice</button></a>
          </span>
          <br />
          { (email === 'jeff@cherri-finance.com') ? (
            <a href={`/AdminDashboard`} className='btn-blue'>Back</a>
          ) : (
            <a href={`/dashboard`} className='btn-blue'>Back</a>
          )}
          <br />
          <br />
        </div>
      </Jumbotron>
    </div>
  )
}
