import React from 'react'
import {Redirect} from 'react-router-dom'

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
        { redirect && <Redirect to="/profiles" />}
        <form onSubmit={this.handleFormSubmission} >
          &nbsp;
          <label>
            Invoice Number:
            &nbsp;
            <input type='text' name='invoiceNumber' />
          </label>

          <label>
            Amount:
            &nbsp;
            <input type='number' name='amount' />
          </label>

          <label>
            Currency:
            &nbsp;
            <input type='text' name='currency' />
          </label>

          <label>
            Offer Amount:
            &nbsp;
            <input type='number' name='offerAmount' />
          </label>

          <label>
            Due Date:
            &nbsp;
            <input type='date' name='dueDate' />
          </label>

          <label>
            Expiry Date:
            &nbsp;
            <input type='date' name='expiryDate' />
          </label>

          <label>
            Status:
            &nbsp;
            <input type='text' name='status' />
          </label>

          <label>
            Customer Company Name:
            &nbsp;
            <input type='text' name='customerCompanyName' />
          </label>

          <label>
            Customer Firstname:
            &nbsp;
            <input type='text' name='customerFirstname' />
          </label>

          <label>
            Customer Surname:
            &nbsp;
            <input type='text' name='customerSurname' />
          </label>

          <label>
            Sale Purchase Agreement:
            &nbsp;
            <input type='text' name='salePurchaseAgreement' />
          </label>

          <label>
            Invoice Upload:
            &nbsp;
            <input type='text' name='invoiceUpload' />
          </label>

          <button type='submit'>Create Invoice</button>
        </form>
      </div>
    )
  }
}

export default InvoiceForm
