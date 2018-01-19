import React from 'react'
import '../App.css'
import Navigation from '../components/navbar'
import Profile from '../components/Profile'
// import decodeJWT from 'jwt-decode'

export default ({ token, profiles }) => {
  console.log(profiles)
  // const decodedToken = decodeJWT(token)
  // const email = decodedToken.email
  // const id = decodedToken.sub
  return (
    <div>
      <Navigation />
      {/* <h1>{email}</h1>
      <h1>{id}</h1> */}
      <Profile profile={profiles} />
      <a href={`/profile/create`} className='btn-blue border'>Create Profile</a>
    </div>
  )
}

// var currencyApi = require('fixer-io-node')

// Returns specific exchange rates

// currencyApi.specificRate('GBP', 'HKD').then(function (result) {
//   console.log(result.rates.GBP)
// }).catch(function (error) {
//   console.log(error)
// })
