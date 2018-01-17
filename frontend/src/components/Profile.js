import React from 'react'
import Invoice from './Invoice'
import {Link} from 'react-router-dom'

export default function Profile ({
  _id,
  email,
  password,
  factoryName,
  address,
  hkid,
  stripeId,
  incorporationCertificate,
  paymentMethod,
  invoices
}) {
  return (
    <div>
      <span>
      Email:
      {/*  match the profile information to match the profile of this email */}
        <Link to={`/profiles/${_id}`}>
          {email}
        </Link>
      </span>
      &nbsp;
      <span>Factory: {factoryName}</span>
      &nbsp;
      <span>Address: {address}</span>
      &nbsp;
      <span>HKid: {hkid}</span>
      &nbsp;
      <span>Stripe ID: {stripeId}</span>
      &nbsp;
      <span>Incorporation Certificate: {incorporationCertificate}</span>
      &nbsp;
      <span>Payment Method: {paymentMethod}</span>
      &nbsp;
      <hr />
      Invoices: {
        // populate our invoices
        invoices ? (
          invoices.map(invoice => (
            <Invoice key={invoice._id}>
              <span>Invoice Number:{invoice.invoiceNumber} </span>
              &nbsp;
              <span>Invoice Amount:{invoice.amount} </span>
              &nbsp;
              <span>Invoice Currency:{invoice.currency} </span>
              &nbsp;
              <span>Offer Amount:{invoice.offerAmount} </span>
              &nbsp;
              <span>Due Date:{invoice.dueDate} </span>
              &nbsp;
              <span>Expiry Date:{invoice.expiryDate} </span>
              &nbsp;
              <span>Status:{invoice.status} </span>
            </Invoice>
          ))
          // or show no tokens
        ) : ('N/A')
      }
      &nbsp;
      <hr />
      <hr />
    </div>
  )
}
