// import our constants
import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { STRIPE_PUBLISHABLE } from '../constants/stripe'

// our API url
const API_URL = `${process.env.REACT_APP_SERVER_URL}`

// set currency AUD for testing possible HKD
const CURRENCY = 'AUD'

// change our cents to currency
const fromDollarsToCents = amount => amount * 100

// success
const successPayment = data => {
  alert('Payment success')
}

// failure
const errorPayment = data => {
  alert('Payment error')
}

const PAYEE = 'acct_1BFw7WCoOW4Jzoaw'

const onToken = (amount, description) => token =>
  axios.post(API_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarsToCents(amount),
      destination: {
        account: PAYEE
      }
    })
    .then(successPayment)
    .catch(errorPayment)

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarsToCents(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout
