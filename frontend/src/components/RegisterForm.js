import React from 'react'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'

function RegisterForm ({ token, onSignUp }) {
  console.log(token)
  console.log(onSignUp)
  return (
    <div>
      <Jumbotron className='jumbotron-blue'>
        <form onSubmit={onSignUp}>
          <label>
        email:
        <input type='email' name='email' />
          </label>
        &nbsp;
          <br />
          <label>
        password:
        <input type='text' name='password' />
          </label>
          <br />
          <button type='submit' className='btn-blue'>Sign Up</button>
        </form>
      </Jumbotron>
    </div>
  )
}

export default RegisterForm
