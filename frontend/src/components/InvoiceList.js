import React from 'react'
import Invoice from './Invoice'
// import decodeJWT from 'jwt-decode'
// const token = window.localStorage.getItem('token')

export default function InvoiceList ({
  users,
  invoice,
  profile,
  match
}) {
  console.log(users)
  console.dir(users.invoices)
  console.log(users.invoices)
  const id = users.invoices
  console.log(invoice)
  console.log(profile)
  console.dir(profile)
  const barry = []
  // if i can get the array of matching invoices saved to the variable id. then .map will work in return
  // id.forEach((i) => {
  //   return invoice.find(i)
  // }).then((i) => { console.log(i) })

  // invoice.find((i) => { i._id === id.map((i) => { i._id = i }) })
  // console.log(inv)
  // const invoice = inv.find({'_id': `${id[0]}`})
  // console.log(invoice)

  return (
    <div>
      <h2>Invoice List!</h2>
      {
        id.map(invoice => {
          return <Invoice {...invoice} />
        })
      }
    </div>
  )
}

// ({ match }) => {
  // const id = match.params.id
//   const profile = profiles.find((p) => p._id === id)
//   // console.log(profile)
//   return (
//     <div>
//       <Profile {...profile} />
