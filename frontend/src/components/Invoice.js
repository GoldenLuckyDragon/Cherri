import React, { Component } from 'react'
import Checkout from './Checkout'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Invoice ({
  _id,
  factoryName,
  address,
  hkid,
  incorporationCertificate,
  paymentMethod,
  invoices,
  profile,
  invoice
}) {
  const henry = profile.find((p) => p._id === _id)
  const barry = henry.invoices
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Item No.</th>
            <th>Due Date</th>
            <th>Invoice No.</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
          barry ? (
            barry.map((invoice, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.invoiceNumber}</td>
                  <td>{invoice.customerCompanyName}</td>
                  <td>{invoice.amount}</td>
                  {invoice.status === 'Pending' && <div className='btn-pending'> Pending </div>}
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
