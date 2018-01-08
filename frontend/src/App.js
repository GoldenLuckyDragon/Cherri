import React, { Component } from 'react'
import logo from './logo.svg'
import Checkout from './Checkout'
import './App.css'
import Navigation from './components/navbar'

// allow for env files
require('dotenv').config()

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navigation />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          {/*  our React STRIPE checkout component */}
          <Checkout
            name={'James Made This'}
            description={'Really!'}
            amount={1}
          />

        </p>
      </div>
    )
  }
}

export default App
