import React, { Component } from 'react'
import Checkout from './Checkout'
import { Table } from 'react-bootstrap'

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
  console.log(profile)
  const henry = profile.find((p) => p._id === _id)
  console.log(henry.factoryName)
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
          </tr>
        </thead>
        <tbody>
          {
          barry ? (
            barry.map(invoice => {
              return (
                <tr>
                  <td>1</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.invoiceNumber}</td>
                  <td>{invoice.customerCompanyName}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.status}</td>
                </tr>
              )
            })) : ('You have no submitted invoices available.')
          }
        </tbody>
      </Table>
    </div>
  )
}

// <Image cloudName='cherri' publicId={`invoices/${variable}.png`} height='300' crop='scale' /> */}
