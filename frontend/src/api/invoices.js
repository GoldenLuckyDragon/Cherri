import { token } from './signin'
const API_URL = `${process.env.REACT_APP_SERVER_URL}`

export function all () {
  // console.log(API_URL)
  return fetch(`${API_URL}/invoice`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => { console.log(error) })
}

export function save (invoice) {
  // console.log(API_URL)
  return fetch(`${API_URL}/invoice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    },
    body: JSON.stringify(invoice)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}

// export function edit (invoice) {
//   return fetch('/invoice/:id', {
//     method: 'PATCH',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(invoice)
//   })
//   .then(res => res.json())
//   .catch(error => { console.log(error) })
// }
