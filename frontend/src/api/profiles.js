const API_URL = `${process.env.REACT_APP_SERVER_URL}`

export function all () {
  console.log(API_URL)
  return fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      // 'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}

export function save (profile) {
  console.log(API_URL)
  return fetch(`${API_URL}/profile`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
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
