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
  incorporationCertificate,
  paymentMethod,
  invoices
}) {
  return (
    <div>
      <span>
      Email:
        <Link to={`/profile/${_id}`}>
          {email}
        </Link>
      </span>
      &nbsp;
      <span>Password: {password}</span>
      &nbsp;
      <span>Factory: {factoryName}</span>
      &nbsp;
      <span>Address: {address}</span>
      &nbsp;
      <span>HKid: {hkid}</span>
      &nbsp;
      <span>Incorporation Certificate: {incorporationCertificate}</span>
      &nbsp;
      <span>Payment Method: {paymentMethod}</span>
      &nbsp;
      Invoices: {
        invoices ? (
          invoices.map(invoice => (
            <Invoice key={invoice._id}>
              <span>Invoice Number:{invoice.invoiceNumber}</span>
              &nbsp;
              <span>Invoice Amount:{invoice.amount}</span>
            </Invoice>
          ))
        ) : ('N/A')
      }
      &nbsp;
    </div>
  )
}
