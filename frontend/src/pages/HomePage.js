import React from 'react'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import { Homelanding, HomelandingTwo, HomelandingThree } from '../components/HomeLanding'

export default () => {
  return (
    <div>
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
