import React from 'react'
import Navigation from '../components/navbar'
import Checkout from '../components/Checkout'

// these three things are key to be taken from token
const User = 'James'
const label = `Pay Invoice from ${User}`
const amount = 10908
const cherri = 'acct_1BlAVECQoy8qPPYE'
const jon = 'acct_1BFw7WCoOW4Jzoaw'

// attempt to create charges between two customers
export default ({ token }) => {
  return (
    <div>
      <Navigation />
      <Checkout
        name={'Payment test'}
        description={label}
        amount={amount}
        payee={cherri}
      />

    </div>
  )
}
