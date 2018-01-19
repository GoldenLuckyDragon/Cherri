import { token } from './signin'
const API_URL = `${process.env.REACT_APP_SERVER_URL}`

// show all our profiles
export function one () {
  // console.log(API_URL)
  return fetch(`${API_URL}/profiles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token()}`
    }
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}

// send a post to our backend API to add to the db

export function save (profile) {
  // console.log(API_URL)
  console.log(profile)
  return fetch(`${API_URL}/profiles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}

// export function edit (profile) {
//   return fetch(`${API_URL}/profile/:id`, {
//     method: 'PATCH',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(profile)
//   })
//   .then(res => res.json())
//   .catch(error => { console.log(error) })
// }
