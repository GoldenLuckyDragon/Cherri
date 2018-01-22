import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, Route, Switch } from 'react-router-dom'

// create our navbar
export default class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <Menu right>
        {/* This nav should only show when the person is signed in. Remember to pass profile_id (i.e. add /${_id} in the part where id is typed) when going to these links - to be added once profile table has been finalised */}
        <Link to={`/`}>Home</Link>
        <Link to={`/signup`}>Register</Link>
        <Link to={`/signin`}>Login</Link>
        <Link to={`/profiles`}>Profiles (temp)</Link>
        <Link to={`/dashboard`}>Dashboard</Link>
        <Link to={`/invoice/create`}>Add Invoice (temp)</Link>
        <Link to={`/profile/id/edit`}>Account (temp)</Link>
        <Link to={`/signout`}>Logout</Link>
      </Menu>
    )
  }
}
