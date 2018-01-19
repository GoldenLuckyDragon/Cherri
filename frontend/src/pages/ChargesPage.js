import React from 'react'
import Navigation from '../components/navbar'
import Checkout from '../components/Checkout'
import decodeJWT from 'jwt-decode'
// import our const Current_user and Destination stripe keys

// these three things are key to be taken from token
const User = 'Carmen'
const label = `Pay Invoice from ${User}`
const amount = 555
// const cherri = 'acct_1BlAVECQoy8qPPYE'
// const jon = 'acct_1BFw7WCoOW4Jzoaw'

// attempt to create charges between two customers
export default ({ token }) => {
  const userToken = decodeJWT(token)

  return (
    <div>
      <Navigation />
      <Checkout
        name={'Payment test'}
        description={label}
        amount={amount}
      />
    </div>
  )
}
