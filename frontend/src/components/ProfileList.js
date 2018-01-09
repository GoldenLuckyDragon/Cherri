import React from 'react'
import Profile from './Profile'

export default function ProfileList ({ profiles }) {
  return (
    <div>
      <h1>Profile List!</h1>
      {
        profiles.map(profile => {
          console.log(profile)
          return <Profile {...profile} />
        })
      }
    </div>
  )
}
