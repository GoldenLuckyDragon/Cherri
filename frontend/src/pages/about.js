import React from 'react'
import decodeJWT from 'jwt-decode'

export default ({ token }) => {
  const decodedToken = decodeJWT(token)
  return (
    <div>
      <h1>About Movies</h1>
      <dl>
        <dt>Subject</dt>
        <dd>{ decodedToken.sub }</dd>
        <dd>{ decodedToken.email }</dd>
      </dl>
    </div>
  )
}
