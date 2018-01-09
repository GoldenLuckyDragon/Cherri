import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <Menu right>
        {/* Remember to pass profile_id when going to these links - to be added once profile table has been finalised */}
        <a id='dashboard' className='menu-item' href='../pages/DashboardPage'>Dashboard</a>
        <a id='account' className='menu-item' href='../pages/AccountPage'>Account</a>
        <a id='account' className='menu-item' href='/logout'>Logout</a>
      </Menu>
    )
  }
}
