import React from 'react'
import {Link} from 'react-router-dom'

const SignedOutMenu = () => {
  return (
    <div>
      <Link to={`/`}>Home</Link>
      &nbsp;
      <br />
      <Link to={`/signin`}>Login</Link>
      &nbsp;
      <br />
      <Link to={`/signup`}>Register</Link>
      &nbsp;
      <br />
      <Link to={`/learnmore`}>Learn More</Link>
      &nbsp;
      <br />
    </div>
  )
}

export default SignedOutMenu
