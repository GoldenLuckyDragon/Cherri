import React, { Component } from 'react'
import Checkout from './Checkout'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function InvoicesAdmin ({
  _id,
  profile,
  invoice,
  stripeId,
  users
}) {
  profile.forEach((profile, index) => {
    profile['invoices'].forEach((invoice, index) => {
      // const invId = (invoice['_id'])
      // const invId = (invoice['_factoryName'])
      // console.log(invId)
      // console.log(profile)
      // const currentProfile = profile.find({'_id': `${variable}`})
      // console.log(currentProfile.factoryName)
    })
  })

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Item No.</th>
            <th>Due Date</th>
            <th>Invoice No.</th>
            <th>End Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
          invoice ? (
            invoice.map((invoice, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.invoiceNumber}</td>
                  <td>{invoice.customerCompanyName}</td>
                  <td>{invoice.amount}</td>
                  {invoice.status === 'Pending' && <Checkout
                    invoice={invoice}
                    name={invoice.customerCompanyName}
                    description={invoice.invoiceNumber}
                    amount={invoice.amount * 0.9}
                    payee={'acct_1BFw7WCoOW4Jzoaw'}
                  />}
                  {invoice.status === 'Approved' && <div className='btn-approved'> Approved </div>}
                  {invoice.status === 'Declined' && <div className='btn-declined'> Declined </div>}
                  {invoice.status === 'Expired' && <div className='btn-expired'> Expired </div>}
                  <td>
                    <Link to={`/invoice/${invoice._id}`}>
                    View
                    </Link>
                  </td>
                </tr>
              )
            })) : ('You have no submitted invoices available.')
          }
        </tbody>
      </Table>
    </div>
  )
}
