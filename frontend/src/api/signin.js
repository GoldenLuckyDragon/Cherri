export function signIn ({ email, password }) {
  return fetch('/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}
