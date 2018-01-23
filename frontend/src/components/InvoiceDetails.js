import React from 'react'
import Invoice from './Invoice'
import {Link} from 'react-router-dom'
import {Image, CloudinaryContext} from 'cloudinary-react'
var cloudinary = require('cloudinary')

export default function InvoiceDetails ({
  invoice
}) {
  console.log(invoice)
  return (
    <div>
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
      {/* <CloudinaryContext cloudName='cherri'>
        <Image publicId={hkidImg} width='150' />
      </CloudinaryContext>
      <hr />
      <span>Incorporation Certificate:</span>
      <CloudinaryContext cloudName='cherri'>
        <Image publicId={icImg} width='150' />
      </CloudinaryContext> */}
      <hr />
    </div>
  )
}
