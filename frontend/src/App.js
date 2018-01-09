import React, { Component } from 'react'
import logo from './logo.svg'
import Checkout from './Checkout'
import './App.css'
import Navigation from './components/navbar'
// import jumbotronInstance from './pages/HomePage'
import { Jumbotron, Button } from 'react-bootstrap'

// allow for env files
require('dotenv').config()
        // <jumbotronInstance />
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navigation />
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
      		This is a simple hero unit, a simple jumbotron-style component for calling
      		extra attention to featured content or information.
      		</p>
          <p>
            <Button bsStyle='primary'>Learn more</Button>
          </p>
        </Jumbotron>
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
