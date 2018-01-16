import React from 'react'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'
// call in the homelanding components
import { Homelanding, HomelandingTwo, HomelandingThree } from '../components/HomeLanding'

// using SendGrid's v3 Node.js Library
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'cherri.finance@gmail.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// }
// sgMail.send(msg)

export default () => {
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <br />
        <Homelanding />
      </Jumbotron>
      <Jumbotron className='jumbotron-white'>
        <HomelandingTwo />
        {/* <a href={STRIPE_URL} className='stripe-connect dark'><span>Connect with Stripe</span></a> */}
      </Jumbotron>
      <Jumbotron className='jumbotron-blue'>
        <HomelandingThree />
      </Jumbotron>
    </div>
  )
}
