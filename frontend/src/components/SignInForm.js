import React from 'react'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'

function SignInForm ({ onSignIn }) {
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <form onSubmit={onSignIn}>
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
          <button type='submit' className='btn-blue'>Sign In</button>
        </form>
      </Jumbotron>
    </div>
  )
}

export default SignInForm
