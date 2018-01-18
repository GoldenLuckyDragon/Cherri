import React from 'react'
import Navigation from '../components/navbar'
import Checkout from '../components/Checkout'

// import our const Current_user and Destination stripe keys

// these three things are key to be taken from token
const User = 'Carmen'
const label = `Pay Invoice from ${User}`
const amount = 123

// attempt to create charges between two customers
export default () => {
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