import React from 'react'
import ProfileList from '../components/ProfileList'
import {Route, Switch, Link} from 'react-router-dom'
import Profile from '../components/Profile'
import { Button } from 'react-bootstrap'

export default ({profiles}) => {
  return (
    profiles ? (
      <Switch>
        <Route path='./invoice/new' render={
          () => (
            <div>
              <ProfileList profiles={profiles} key={profiles._id} />
            </div>
          )
        } />
        <Route path='/profiles/:id' render={
          ({ match }) => {
            const id = match.params.id
            const profile = profiles.find((p) => p._id === id)
            console.log(match.params)
            return (
              <Link to='/profiles/${profile}/invoice/new'><Button>Sign Up</Button></Link>
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
