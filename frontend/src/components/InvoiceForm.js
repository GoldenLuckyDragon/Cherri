import React from 'react'
import {Redirect} from 'react-router-dom'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'

export default class InvoiceForm extends React.Component {
  state = { redirect: false}

  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target
    const invoiceNumber = elements['invoiceNumber'].value
    const amount = elements['amount'].value
    const currency = elements['currency'].value
    const offerAmount = amount * .90
    const dueDate = elements['dueDate'].value
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf())
      date.setDate(date.getDate() + days)
      return date
    }
    var date = new Date()
    alert(`Your offer to sell this invoice will not expire until ${date.addDays(7)}`)
    const expiryDate = date.addDays(7)
    const status = 'Pending'
    const customerCompanyName = elements['customerCompanyName'].value
    const customerFirstname = elements['customerFirstname'].value
    const customerSurname = elements['customerSurname'].value
    // const salePurchaseAgreement = elements['salePurchaseAgreement'].value
    // const invoiceUpload = elements['invoiceUpload'].value
    this.props.onSubmit({invoiceNumber, amount, currency, offerAmount, dueDate, expiryDate, status, customerCompanyName, customerFirstname, customerSurname})
    this.setState({ redirect: true })
  }
  render() {
    const {redirect} = this.state
    return (
      <div>
        {/* { redirect && <Redirect to="/InvoiceUpload" />} */}
        <form onSubmit={this.handleFormSubmission} >
          &nbsp;
          SUBMIT AN INVOICE
          <br/>
          <br/>
          <label>
            Invoice Number:
            &nbsp;
            <input type='text' name='invoiceNumber' required />
          </label>
          <br/>

          <label>
            Amount:
            &nbsp;
            <input type='number' name='amount' max='300000000' required />
          </label>
          <br/>

          <label>
            Currency:
            &nbsp;
            <select name='currency' required>
              <option value="HKD">HKD</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="AUD">AUD</option>
            </select>
          </label>
          <br/>

          <label>
            Due Date:
            &nbsp;
            <input type='date' name='dueDate' required />
          </label>
          <br/>

          <label>
            Customer Company Name:
            &nbsp;
            <input type='text' name='customerCompanyName' />
          </label>
          <br/>

          <label>
            Customer Firstname:
            &nbsp;
            <input type='text' name='customerFirstname' />
          </label>
          <br/>

          <label>
            Customer Surname:
            &nbsp;
            <input type='text' name='customerSurname' />
          </label>
          <br/>
          <a href={`/invoice/upload`} className='btn-blue'>Submit</a>
          {/* <button type='submit' className='btn-blue'>Create Invoice</button> */}
          <br/>
        </form>
      </div>
    )
  }
}
