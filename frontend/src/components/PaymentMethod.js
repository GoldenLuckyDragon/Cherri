import React from 'react'
import connectStripe from '../images/connectStripe.png'
import { STRIPE_URL } from '../constants/stripe'

export default function PaymentMethod ({ currentEmail }) {
  let stripeUrlWithEmail = STRIPE_URL + `&user_email=${currentEmail}`
  return (
    <div>
      <br />
      <span>
        {
          <a href={stripeUrlWithEmail}>
            <img src={connectStripe} alt='connect with stripe' height='30' />
          </a>
        }
      </span>
    </div>
  )
}
