// import our constants
import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { STRIPE_PUBLISHABLE } from '../constants/stripe'

// our API url
const API_URL = `${process.env.REACT_APP_SERVER_URL}`

// set currency AUD for testing possible HKD
const CURRENCY = 'HKD'

// notifier
const notifier = require('node-notifier')

// change our cents to currency
const fromDollarsToCents = amount => amount * 100

// our update invoice function
const updateInvoice = (invoice) => {
  alert(invoice._id)
  alert(invoice.status)
  invoice.status = 'Approved'
  alert(invoice.status)
}

// success
const successPayment = (data) => {
  console.log({ data })
  alert('Payment success Thankyou')
  updateInvoice(data)
  // update status of invoice
}

// failure
const errorPayment = (data, err) => {
  console.log({ data })
  alert('Payment Error, please try again')
  if (err) {
    console.log(err)
  }
}

// The signed in user pays our payee
const onToken = (invoice, token, amount, payee, description) => {
  console.log('*********')
  console.log({ token, amount, payee, description })
  axios.post(API_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarsToCents(amount),
      destination: {
        // amount less our fee, and our constant payee
        amount: amount,
        account: payee
      }
    })
    .then(successPayment(invoice))
    .catch(errorPayment)
}

const Checkout = ({ invoice, payee, name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarsToCents(amount)}
    token={(token) => onToken(invoice, token, amount, payee, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout
