import React from 'react'

function RegisterForm ({ token, onSignUp }) {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={onSignUp}>
        <label>
        email:
        <input type='email' name='email' />
        </label>
        &nbsp;
        <label>
        password:
        <input type='text' name='password' />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default RegisterForm
