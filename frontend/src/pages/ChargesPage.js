import React from 'react'
import Navigation from '../components/navbar'
import Checkout from '../components/Checkout'

// import our const Current_user and Destination stripe keys

const PAYEE = 'acct_1BFw7WCoOW4Jzoaw'

// attempt to create charges between two customers
export default () => {
  return (
    <div>
      <Navigation />
      <Checkout
        name={'Pay Jon'}
        description={'Test'}
        amount={100}
        payee={PAYEE}
      />
    </div>
  )
}
