import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Profile from '../components/Profile'
import Invoice from '../components/Invoice'
import { Button } from 'react-bootstrap'

const token = window.localStorage.getItem('token')

console.log(token)

export default ({users, profiles, invoices}) => {
  return (
    users ? (
      <Switch>
        <Route path='/profiles' render={
          () => {
            const user = users.account
            console.log(invoices)
            return (
              <Profile profile={profiles} invoice={invoices} {...user} />
            )
          }
        } />
        <Route path='/invoices' render={
          () => {
            const user = users.account
            console.log(invoices)
            return (
              <Invoice profile={profiles} invoice={invoices} {...user} />
            )
          }
        } />
      </Switch>
    ) : (
      'Loading...'
    )
  )
}
