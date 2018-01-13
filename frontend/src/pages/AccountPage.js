import React from 'react'
import ProfileList from '../components/ProfileList'
import {Route, Switch, Link} from 'react-router-dom'
import Profile from '../components/Profile'
import InvoiceForm from '../components/InvoiceForm'
import { Button } from 'react-bootstrap'

export default ({profiles}) => {
  return (
    profiles ? (
      <Switch>
        <Route path='/profiles/:id/invoice/new' render={
          () => (
            <div>
              <InvoiceForm onSubmit={this.handleInvoiceSubmission} />
            </div>
          )
        } />
        <Route path='/profiles/:id' render={
          ({ match }) => {
            const id = match.params.id
            const profile = profiles.find((p) => p._id === id)
            console.log(profile)
            return (
              <div>
                <Profile {...profile} />
                <Link to={`/profiles/${id}/invoice/new`}><Button>Add Invoice</Button></Link>
              </div>
            )
          }
        } />
        <Route path='/profiles' render={
          () => (
            <div>
              <ProfileList profiles={profiles} key={profiles._id} />
            </div>
          )
        } />
      </Switch>
    ) : (
      'Loading...'
    )
  )
}
