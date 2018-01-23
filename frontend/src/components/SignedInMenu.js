import React from 'react'
import {Link} from 'react-router-dom'

const SignedInMenu = () => {
  return (
    <div>
      <Link to={`/`}>Home</Link>
      &nbsp;
      <br />
      <Link to={`/dashboard`}>Dashboard</Link>
      &nbsp;
      <br />
      <Link to={`/invoice/create`}>Add Invoice</Link>
      &nbsp;
      <br />
      <Link to={`/profile/id/edit`}>Account</Link>
      &nbsp;
      <br />
      <Link to={`/signout`}>Logout</Link>
      &nbsp;
    </div>
  )
}

export default SignedInMenu
