import React from 'react'
import decodeJWT from 'jwt-decode'

export default ({ token }) => {
  const decodedToken = decodeJWT(token)
  const email = decodedToken.email
  return email
}
