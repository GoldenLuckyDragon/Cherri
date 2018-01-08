import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <Menu right>
        <a id='home' className='menu-item' href='/'>Home</a>
        <a id='dashboard' className='menu-item' href='/dashboard'>Dashboard</a>
        <a id='account' className='menu-item' href='/account'>Account</a>
      </Menu>
    )
  }
}
