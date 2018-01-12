import React from 'react'
import ProfileList from '../components/ProfileList'
import {Route, Switch} from 'react-router-dom'
import Profile from '../components/Profile'

export default ({profiles}) => {
  return (
    profiles ? (
      <Switch>
        <Route path='/profiles/:id' render={
          ({ match }) => {
            const id = match.params.id
            const profile = profiles.find((p) => p._id === id)
            console.log(match.params)
            return (<Profile {...profile} />)
          }
        } />
        <Route path='/profiles/:id' render={
          ({ match }) => {
            const id = match.params.id
            const profile = profiles.find((p) => p._id === id)
            console.log(match.params)
            return (<Profile {...profile} />)
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
