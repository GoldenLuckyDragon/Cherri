import React from 'react'
import Invoice from './Invoice'
import {Link} from 'react-router-dom'
import Checkout from '../components/Checkout'
import connectStripe from '../images/connectStripe.png'
import { STRIPE_URL } from '../constants/stripe'
import decodeJWT from 'jwt-decode'

const token = window.localStorage.getItem('token')
const decodedToken = decodeJWT(token)
const currentEmail = decodedToken.email

export default function PaymentMethod ({
  _id,
  profile
}) {
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
