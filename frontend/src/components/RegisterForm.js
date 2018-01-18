import React from 'react'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'

function RegisterForm ({ onSignUp }) {
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <form onSubmit={onSignUp}>
          <label>
        email:
        <input type='email' name='email' />
          </label>
        &nbsp;
          <br />
          <label>
        password:
        <input type='password' name='password' />
          </label>
          <br />
          <button>Sign Up</button>
        </form>
      </Jumbotron>
    </div>
  )
}

export default RegisterForm
