import React from 'react'
import Profile from './Profile'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'

export default function ProfileList ({ profiles }) {
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <h2>Profile List!</h2>
        {
        profiles.map(profile => {
          return <Profile {...profile} />
        })
      }
      </Jumbotron>
    </div>
  )
}
