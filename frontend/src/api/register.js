const API_URL = `${process.env.REACT_APP_SERVER_URL}`

export function register ({ email, password }) {
  return fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}
