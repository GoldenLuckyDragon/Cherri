import React from 'react'
import '../App.css'
import Navigation from '../components/navbar'

export default () => {
  return (
    <div>
      <Navigation />
      <h1>Dashboard</h1>
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
