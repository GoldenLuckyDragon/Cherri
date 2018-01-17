import React from 'react'
import Navigation from '../components/navbar'
import Checkout from '../components/Checkout'

// import our const Current_user and Destination stripe keys
const User = 'Carmen'
const payee = 'acct_1BFw7WCoOW4Jzoaw'
const label = `Pay Invoice from ${User}`
const payeeEmail = 'cherri.finance@gmail.com'

// attempt to create charges between two customers
export default () => {
  return (
    <div>
      <Navigation />
      <Checkout
        name={'Payment test'}
        description={label}
        amount={85}
      />
    </div>
  )
}
