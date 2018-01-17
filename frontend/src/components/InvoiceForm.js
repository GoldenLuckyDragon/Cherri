import React from 'react'
import {Redirect} from 'react-router-dom'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'

class InvoiceForm extends React.Component {
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
    const salePurchaseAgreement = elements['salePurchaseAgreement'].value
    const invoiceUpload = elements['invoiceUpload'].value
    // onSubmit({invoiceNumber, amount})
    this.props.onSubmit({invoiceNumber, amount, currency, offerAmount, dueDate, expiryDate, status, customerCompanyName, customerFirstname, customerSurname, salePurchaseAgreement, invoiceUpload})
    this.setState({ redirect: true })
  }
  render() {
    const {redirect} = this.state
    return (
      <div>
        <Navigation />
        <Jumbotron className='jumbotron-blue'>
          <Logo />
        { redirect && <Redirect to="/profiles" />}
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

          <label>
            Signed Sale Purchase Agreement (download from <a href='http://res.cloudinary.com/cherri/image/upload/v1516149513/Accounts_Receivable_Purchase_Agreement.docx_cxglxl.pdf' target='_blank'>here</a>):
            &nbsp;
            <input type='file' name='salePurchaseAgreement' />
          </label>
          <br/>

          <label>
            Invoice Upload:
            &nbsp;
            <input type='file' name='invoiceUpload' />
          </label>
          <br/>

          <button type='submit' className='btn-blue'>Create Invoice</button>
          <br/>
        </form>
      </Jumbotron>
      </div>
    )
  }
}

export default InvoiceForm
