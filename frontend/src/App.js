// import our constants
import React, { Component } from 'react'
import logo from './logo.svg'
import Checkout from './components/Checkout'
import './App.css'
import Navigation from './components/navbar'

// Our Stripe connect url
const STRIPE_URL = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_BjHuFmrEKXcxfPWEGG7eFkFienrbbAs5&scope=read_write'

// allow for env files
require('dotenv').config()

// our main page app
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navigation />

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to CHERRI <span>🍒</span></h1>
        </header>

        <p className='App-intro'>

          {/*  our React STRIPE checkout component */}
          <Checkout
            name={'James Made This'}
            description={'Pay via stripe'}
            amount={1}
          />
        </p>

        <a href={STRIPE_URL} class='stripe-connect dark'><span>Connect with Stripe</span></a>
      </div>
    )
  }
}

export default App
