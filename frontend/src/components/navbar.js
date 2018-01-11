import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, Route, Switch } from 'react-router-dom'

export default class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <Menu right>
          {/* This nav should only show when the person is signed in. Remember to pass profile_id (i.e. add /${_id} in the part where id is typed) when going to these links - to be added once profile table has been finalised */}
          <Link to={`/profiles`}>Profiles(temp)</Link>
          <Link to={`/profile/id`}>Dashboard</Link>
          <Link to={`/profile/id/edit`}>Account</Link>
          <Link to={`/profile/id`}>Logout</Link>
        </Menu>
      </div>
    )
  }
}
