import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, Route, Switch } from 'react-router-dom'

export default class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <Menu right>
        {/* Remember to pass profile_id (i.e. add /${_id} in the part where id is typed) when going to these links - to be added once profile table has been finalised */}
        <Link to={`/profile/id/dashboard`}>Dashboard</Link>
        <Link to={`/profile/id/account`}>Account</Link>
        <Link to={`/profile/id`}>Logout</Link>
      </Menu>
    )
  }
}
