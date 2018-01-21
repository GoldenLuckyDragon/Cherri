import { token } from './signin'
const API_URL = `${process.env.REACT_APP_SERVER_URL}`

// send our email and password to the backend api
export function all () {
  // console.log(API_URL)
  return fetch(`${API_URL}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    }
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}
