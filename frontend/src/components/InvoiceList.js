import React from 'react'
import Invoice from './Invoice'
// import decodeJWT from 'jwt-decode'
// const token = window.localStorage.getItem('token')

export default function InvoiceList ({
  users,
  invoice,
  profile
}) {
  console.log(users)
  console.dir(users.invoices)
  console.log(users.invoices)
  console.log(invoice)
  console.log(profile)
  const id = users.invoices
  console.log(id[0])
  // const invoice = inv.find({'_id': `${id[0]}`})
  // console.log(invoice)

  return (
    <div>
      <h2>Invoice List!</h2>
      {
        id.map(invoice => {
          return <Invoice invoice={invoice} />
        })
      }
    </div>
  )
}
