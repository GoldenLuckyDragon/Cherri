import React from 'react'
import Invoice from './Invoice'
import {Link} from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
import Checkout from '../components/Checkout'

export default function Profile ({
  _id,
  email,
  password,
  factoryName,
  address,
  hkid,
  // stripeId,
  incorporationCertificate,
  paymentMethod,
  invoices
}) {
  return (
    <div>
      {/* <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo /> */}
      <br />
      <span>
      Email:
      {/*  match the profile information to match the profile of this email */}
        <Link to={`/profiles/${_id}`}>
          {email}
        </Link>
      </span>
      <br />
      <span>Factory: {factoryName}</span>
      <br />
      <span>Address: {address}</span>
      <br />
      <span>HKID: {hkid}</span>
      <br />
      {/* <span>Stripe ID: {stripeId}</span> */}
      <br />
      <span>Incorporation Certificate: {incorporationCertificate}</span>
      <br />
      <span>Payment Method: {paymentMethod}</span>
      &nbsp;
      <hr />
      Invoices: {
        // populate our invoices
        invoices ? (
          invoices.map(invoice => (
            <Invoice key={invoice._id}>
              <span>Invoice Number:{invoice.invoiceNumber} </span>
              <br />
              <span>Invoice Amount:{invoice.amount} </span>
              <br />
              <span>Invoice Currency:{invoice.currency} </span>
              <br />
              <span>Offer Amount:{invoice.offerAmount} </span>
              <br />
              <span>Due Date:{invoice.dueDate} </span>
              <br />
              <span>Expiry Date:{invoice.expiryDate} </span>
              <br />
              <span>Status:{invoice.status} </span>
              &nbsp;

              <Checkout
                name={` Pay ${invoice.customerCompanyName}`}
                description={` Invoice :${invoice.invoiceNumber}`}
                amount={invoice.offerAmount}
                // payee={stripeId}
              />
              &nbsp;
            </Invoice>
          ))
          // or show no tokens
        ) : ('You have no submitted invoices available.')
      }
      &nbsp;
      <hr />
      {/* </Jumbotron> */}

    </div>
  )
}

// export function InvoiceHistory ({
//   invoices
// }) {
//   return (
//     <div>
//       Invoices: {
//         // populate our invoices
//         invoices ? (
//           invoices.map(invoice => (
//             <Invoice key={invoice._id}>
//               <span>Invoice Number:{invoice.invoiceNumber} </span>
//               <br />
//               <span>Invoice Amount:{invoice.amount} </span>
//               <br />
//               <span>Invoice Currency:{invoice.currency} </span>
//               <br />
//               <span>Offer Amount:{invoice.offerAmount} </span>
//               <br />
//               <span>Due Date:{invoice.dueDate} </span>
//               <br />
//               <span>Expiry Date:{invoice.expiryDate} </span>
//               <br />
//               <span>Status:{invoice.status} </span>
//               &nbsp;
//
//               <Checkout
//                 name={` Pay ${invoice.customerCompanyName}`}
//                 description={` Invoice :${invoice.invoiceNumber}`}
//                 amount={invoice.offerAmount}
//                 // payee={stripeId}
//               />
//               &nbsp;
//             </Invoice>
//           ))
//           // or show no tokens
//         ) : ('You have no submitted invoices available.')
//       }
//       &nbsp;
//       <hr />
//     </div>
//   )
// }
