import React from 'react'
import stripedash from '../images/stripe.png'

export default function ConnectedToStripe () {
  let dashboard = `https://dashboard.stripe.com/dashboard`
  return (
    <div>
      <br />
      <span>
        {
          <a href={dashboard}>
            <img src={stripedash} alt={`You've Connected`} height='30' />
          </a>
        }
        <br />
        Your account is already connected to stripe, click here to access your stripe dashboard.
        <br />
        <br />
      </span>
    </div>
  )
}
