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
  stripeId,
  incorporationCertificate,
  paymentMethod,
  invoices
}) {
  return (
    <div>
      {/* <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo /> */}
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
      <span>HKID: {hkid}</span>
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
                payee={stripeId}
              />
              &nbsp;
            </Invoice>
          ))
          // or show no tokens
        ) : ('N/A')
      }
      &nbsp;
<<<<<<< HEAD
      <hr />
      <hr />
      {/* </Jumbotron> */}
=======
        <hr />
      </form>
>>>>>>> a0c86bbd9c9d6460262f94742c602f1b13894785
    </div>
  )
}
