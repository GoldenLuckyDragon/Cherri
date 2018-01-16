export function all () {
  return fetch('/profile')
    .then(res => res.json())
    .catch(error => { console.log(error) })
}

export function save (profile) {
  return fetch('/profile', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(profile)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}

export function edit (profile) {
  return fetch('/profile', {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(profile)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}
