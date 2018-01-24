import React from 'react'
import {Link} from 'react-router-dom'
import {Image, CloudinaryContext} from 'cloudinary-react'
import '../App.css'
import Navigation from '../components/navbar'
import { Jumbotron, Table } from 'react-bootstrap'
import Logo from '../components/Logo'
var cloudinary = require('cloudinary')

export default function InvoiceDetails ({
  invoice
}) {
  console.log(invoice)
  const invoiceid = invoice._id
  const invoiceImg = `invoices/${invoiceid}_inv.png`
  const spaImg = `invoices/${invoiceid}_ic.png`
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
          <CloudinaryContext cloudName='cherri'>
            <Image publicId={invoiceImg} width='150' />
          </CloudinaryContext>
          <hr />
          <span>Signed Sale and Purchase Agreement:</span>
          <CloudinaryContext cloudName='cherri'>
            <Image publicId={spaImg} width='150' />
          </CloudinaryContext>
        </div>
      </Jumbotron>
    </div>
  )
}
