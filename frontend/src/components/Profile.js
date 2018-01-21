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
  invoice
}) {
  return (
    <div>
      &nbsp;
      <span>Factory: {factoryName}</span>
      &nbsp;
      <span>Address: {address}</span>
      &nbsp;
      <span>HKID: {hkid}</span>
      &nbsp;
      <span>Incorporation Certificate: {incorporationCertificate}</span>
      &nbsp;
      <span>Payment Method: {paymentMethod}</span>
      &nbsp;
      <hr />
      Invoices: {
        invoices.map(i => {
          console.log(i)
          // invoice.find({'_id': `${i}`})
        })
        // populate our invoices
        // invoices ? (
        //   invoices.map(inv => {
        //     console.log(inv)
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

              // <Checkout
              //     name={` Pay ${invoice.customerCompanyName}`}
              //     description={` Invoice :${invoice.invoiceNumber}`}
              //     amount={invoice.offerAmount}
              //   // payee={stripeId}
              // />
        //       </div>
        //     )
        //   })
        //   // or show no tokens
        // ) : ('N/A')
      }
      &nbsp;
      <hr />
      <hr />
      {/* </Jumbotron> */}

    </div>
  )
}
