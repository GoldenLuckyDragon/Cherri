import decodeJWT from 'jwt-decode'
const API_URL = `${process.env.REACT_APP_SERVER_URL}`

// setting the token at this level so that it can be called whenever we want.
function setToken (token) {
  if (token) {
    // window.localStorage.setItem('token', token)
    // javascript takes all window objects and makes them global
    localStorage.setItem('token', token)
  } else {
    localStorage.removeItem('token')
  }
}

export const token = () => (
  localStorage.getItem('token')
)

export function decodedToken () {
  if (isSignedIn()) {
    return decodeJWT(token())
  }
}

export function signIn ({ email, password }) {
  return fetch(`${API_URL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => res.json())
  .then(json => {
    // console.dir(json)
    if (json) { setToken(json['token']) }
    const stats = decodedToken()
    // console.dir('the signin json is', json)
    console.log('stats are :', stats)
    // as it {} need to return something
    return (json)
  })
  .catch(error => { console.log(error) })
}

export function register ({ email, password }) {
  return fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => res.json())
  .then(json => {
    if (json) { setToken(json['token']) }
    // console.log(decodedToken())
    // as it {} need to return something
    return json
  })
  .catch(error => { console.log(error) })
}

// if you sign out clear the token
export function signOut () {
  setToken('')
  alert('You have Logged out')
}

// boolean
export function isSignedIn () {
  return !!token()
}
