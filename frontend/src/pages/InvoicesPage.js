import React from 'react'
import InvoiceList from '../components/InvoiceList'
import {Route, Switch, Link} from 'react-router-dom'
import Invoice from '../components/Invoice'
import InvoiceForm from '../components/InvoiceForm'
// import * as invoiceAPI from './api/invoices'
// import InvoiceEditForm from '../components/InvoiceEditForm'
import { Button } from 'react-bootstrap'

export default ({invoices}) => {
  // function handleInvoiceSubmission (invoice) {
  //   this.setState(({invoices}) => {
  //     return {invoices: [invoice].concat(invoices)}
  //   })
  //   // calling the save function from backend API route
  //   invoiceAPI.save(invoice)
  // }

  return (
    invoices ? (
      <Switch>
        <Route path='/invoices/:id' render={
          ({ match }) => {
            const id = match.params.id
            const invoice = invoices.find((i) => i._id === id)
            console.log(invoice)
            return (
              <div>
                <Invoice {...invoice} />
                <Link to={`/profiles/${id}/invoice/new`}><Button>Add Invoice</Button></Link>
                <br />
              </div>
            )
          }
        } />
        <Route path='/invoices' render={
          () => (
            <div>
              <InvoiceList invoices={invoices} key={invoices._id} />
            </div>
          )
        } />
      </Switch>
    ) : (
      'Loading...'
    )
  )
}
