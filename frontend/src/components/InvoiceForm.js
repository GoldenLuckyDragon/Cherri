import React from 'react'
import {Redirect} from 'react-router-dom'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'

class InvoiceForm extends React.Component {
  state = { redirect: false}

  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target
    const invoiceNumber = elements['invoiceNumber'].value
    const amount = elements['amount'].value
    const currency = elements['currency'].value
    const offerAmount = elements['offerAmount'].value
    const dueDate = elements['dueDate'].value
    const expiryDate = elements['expiryDate'].value
    const status = elements['status'].value
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
      <div className='upload-form'>
        <br/>
        { redirect && <Redirect to="/profiles" />}
        <form onSubmit={this.handleFormSubmission} >
          &nbsp;
          <label>
            Invoice Number:
            &nbsp;
            <input type='text' name='invoiceNumber' />
          </label>
          <br/>

          <label>
            Amount:
            &nbsp;
            <input type='number' name='amount' />
          </label>
          <br/>

          <label>
            Currency:
            &nbsp;
            <select>
              <option value="HKD" name='currency'>HKD</option>
              <option value="USD" name='currency' >USD</option>
              <option value="GBP" name='currency' >GBP</option>
              <option value="EUR" name='currency'>EUR</option>
              <option value="AUD" name='currency'>AUD</option>
            </select>
          </label>
          <br/>

          <label>
            Due Date:
            &nbsp;
            <input type='date' name='dueDate' />
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
            Sale Purchase Agreement:
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

          {/* Note: the following items need to be calculated by the platform and passed into the database */}
          {/* <label>
            Offer Amount:
            &nbsp;
            <input type='number' name='offerAmount' />
          </label>
          <br/>

          <label>
            Status:
            &nbsp;
            <input type='text' name='status' />
          </label>
          <br/>

          <label>
            Expiry Date:
            &nbsp;
            <input type='date' name='expiryDate' />
          </label>
          <br/>
           */}
          <button type='submit' className='btn blue'>Create Invoice</button>
          <br/>
        </form>
      </div>
    </div>
    )
  }
}

export default InvoiceForm
