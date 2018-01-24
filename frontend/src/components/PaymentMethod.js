import React from 'react'
import connectStripe from '../images/connectStripe.png'
import { STRIPE_URL } from '../constants/stripe'

export default function PaymentMethod ({ email }) {
  let stripeUrlWithEmail = STRIPE_URL + `&user_email=${email}`
  return (
    <div>
      <br />
      <span>
        <a href={stripeUrlWithEmail}>
          <img src={connectStripe} alt='connect with stripe' height='30' />
        </a>
        <br />
        <br />
          For direct deposit bank transfers: Contact Jeff on cherri.finance@gmail.com
      </span>
    </div>
  )
}
