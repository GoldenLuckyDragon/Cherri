import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
import {Redirect} from 'react-router-dom'

class InvoiceEditForm extends React.Component {
  state = {
    redirect: false,
    invoice: this.props.invoice
  }

  handleFormSubmission = (event) => {
    event.preventDefault();
    this.setState({ redirect: true})
    this.props.onSubmit(this.state.invoice);
  }

  handleInputChange = (event) => {
    const attr = event.target.name
    const value = event.target.value
    const invoice = this.state.invoice
    console.log(this.state.invoice)
    // need [] cause otherwise you are trying to set invoice.attr = value which isn't a thing.
    invoice[attr] = value
    this.setState({ invoice })
  }
  render() {
    const {redirect} = this.state
    const inv = this.props.invoice
    console.log(inv._id)
      return (
      <div>
        { redirect && <Redirect to='/dashboard'/>}
        <form onSubmit={this.handleFormSubmission} >
          &nbsp;
          <label>
            Invoice Number:
            &nbsp;
            <input placeholder={inv.invoiceNumber} onChange={ this.handleInputChange } type='text' name='invoiceNumber' />
          </label>
          &nbsp;
          <label>
            Currency:
            &nbsp;
            <input placeholder={inv.currency} onChange={ this.handleInputChange } type='text' name='currency' />
          </label>
          &nbsp;
          <label>
            Invoice Amount:
            &nbsp;
            <input placeholder={inv.amount} onChange={ this.handleInputChange } type='number' name='amount' />
          </label>
          &nbsp;
          <label>
            Due Date:
            &nbsp;
            <input placeholder={inv.dueDate} onChange={ this.handleInputChange } type='date' name='dueDate' />
          </label>
          &nbsp;
          <label>
            Customer Company Name:
            &nbsp;
            <input placeholder={inv.customerCompanyName} onChange={ this.handleInputChange } type='text' name='customerCompanyName' />
          </label>
          &nbsp;
          <label>
            Customer Firstname:
            &nbsp;
            <input placeholder={inv.customerFirstname} onChange={ this.handleInputChange } type='text' name='customerFirstname' />
          </label>
          &nbsp;
          <label>
            Customer Surname:
            &nbsp;
            <input placeholder={inv.customerSurname} onChange={ this.handleInputChange } type='text' name='customerSurname' />
          </label>
          <br />
          <button type='submit' className='btn-blue'>Edit Invoice</button>
        </form>
      </div>
    )
  }
}

export default InvoiceEditForm
