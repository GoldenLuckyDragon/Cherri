import React from 'react'
import ProfileList from '../components/ProfileList'
import {Route, Switch, Link} from 'react-router-dom'
import Profile from '../components/Profile'
import Invoice from '../components/Invoice'
import InvoiceForm from '../components/InvoiceForm'
// import * as invoiceAPI from './api/invoices'
import ProfileEditForm from '../components/ProfileEditForm'
import { Button } from 'react-bootstrap'
import decodeJWT from 'jwt-decode'

const token = window.localStorage.getItem('token')

// console.log(token)

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
