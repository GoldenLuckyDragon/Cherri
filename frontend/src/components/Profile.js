import React from 'react'
import Invoice from './Invoice'
import {Link} from 'react-router-dom'
// import { Jumbotron } from 'react-bootstrap'
// import Logo from '../components/Logo'
// import Navigation from '../components/navbar'
import Checkout from '../components/Checkout'

export default function Profile ({
  _id,
  factoryName,
  address,
  hkid,
  incorporationCertificate,
  invoices,
  profile,
  invoice
}) {
  const henry = profile.find((p) => p._id === _id)
  return (
    <div>
      <br />
      <span>Factory Name: {henry.factoryName}</span>
      <br />
      <span>Address: {henry.address}</span>
      <br />
      <span>HKID: {henry.hkid}</span>
      <br />
      <br />
    </div>
  )
}

// Invoices: {
  // barry ? (
  //   barry.map(invoice => {
  //     return (
  //       <div>
  //         <span>Invoice Number:{invoice.invoiceNumber} </span>
  //         <br />
  //         <span>Invoice Amount:{invoice.amount} </span>
  //         <br />
  //         <span>Invoice Currency:{invoice.currency} </span>
  //         <br />
  //         <span>Offer Amount:{invoice.offerAmount} </span>
  //         <br />
  //         <span>Due Date:{invoice.dueDate} </span>
  //         <br />
  //         <span>Expiry Date:{invoice.expiryDate} </span>
  //         <br />
  //         <span>Status:{invoice.status} </span>
  //       &nbsp;
  //
  //       <Checkout
  //         name={` Pay ${invoice.customerCompanyName}`}
  //         description={` Invoice :${invoice.invoiceNumber}`}
  //         amount={invoice.offerAmount}
  //         // payee={stripeId}
  //       />
  //       </div>
  //     )
  //   })
  //   // or show no tokens
  // ) : ('You have no submitted invoices available.')
