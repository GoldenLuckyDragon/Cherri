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
        <div className='card card-shadow'>
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
            <button type='submit' className='btn-blue'>Sign Up</button>
          </form>
        </div>
      </Jumbotron>
    </div>
  )
}

export default RegisterForm
