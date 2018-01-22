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
  paymentMethod,
  invoices,
  profile,
  invoice
}) {
  // console.log(profile)
  // console.log(invoice)
  // // const profile = profiles.find((p) => p._id === id)
  // console.log(_id)
  const henry = profile.find((p) => p._id === _id)
  return (
    <div>
      &nbsp;
      <span>Factory: {henry.factoryName}</span>
      &nbsp;
      <span>Address: {henry.address}</span>
      &nbsp;
      <span>HKID: {henry.hkid}</span>
      &nbsp;
      <span>Incorporation Certificate: {henry.incorporationCertificate}</span>
      &nbsp;
      <span>Payment Method: {henry.paymentMethod}</span>
      &nbsp;
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
