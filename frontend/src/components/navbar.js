import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import SignedInMenu from '../components/SignedInMenu'
import SignedOutMenu from '../components/SignedOutMenu'

/* This nav should only show when the person is signed in. Remember to pass profile_id (i.e. add /${_id} in the part where id is typed) when going to these links - to be added once profile table has been finalised */

// create our navbar
export default class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: props.email
    }
  }

  showSettings (event) {
    event.preventDefault()
  }

  render () {
    const {currentEmail} = this.props

      console.log(this.props)
    return (
      <div>
        <Menu right>

          { currentEmail &&
          <SignedInMenu />
          }
          <SignedOutMenu />
        </Menu>
      </div>
    )
  }
}
