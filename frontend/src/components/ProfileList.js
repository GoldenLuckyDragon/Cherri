import React from 'react'
import Profile from './Profile'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
import decodeJWT from 'jwt-decode'

const token = window.localStorage.getItem('token')

export default function ProfileList ({ profiles, invoices }) {
  // const decodedToken = decodeJWT(token)
  // console.log(decodedToken)
  // const email = decodedToken.email
  // console.log(email)

  return (
    <div>
      <h2>Profile List!</h2>
      {
        profiles.map(profile => {
          return <Profile invoice={invoices} {...profile} />
        })
      }
    </div>
  )
}
