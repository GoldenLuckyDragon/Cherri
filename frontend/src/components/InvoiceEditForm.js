import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
import {Redirect} from 'react-router-dom'

class ProfileEditForm extends React.Component {
  state = {
    redirect: false,
    invoice: {}
  }

  handleFormSubmission = (event) => {
    event.preventDefault();

    const { elements } = event.target;
    this.setState({ redirect: true})
    this.props.onSubmit(this.state.invoice);
  }

  handleInputChange = (event) => {
    const attr = event.target.name
    const value = event.target.value
    const invoices = this.state.invoice
    // need [] cause otherwise you are trying to set profile.attr = value which isn't a thing.
    invoices[attr] = value
    this.setState({ invoices })
  }
  render() {
    const {redirect} = this.state
      return (
      <div>
        { redirect && <Redirect to="/dashboard"/>}
        <form onSubmit={this.handleFormSubmission} >
          &nbsp;
          <label>
            Factory Name:
            &nbsp;
            <input onChange={ this.handleInputChange } type='text' name='invoiceNumber' />
          </label>
          &nbsp;
          <label>
            Address:
            &nbsp;
            <input onChange={ this.handleInputChange } type='date' name='dueDate' />
          </label>
          &nbsp;
          <button type='submit' className='btn-blue'>Edit Profile</button>
        </form>
      </div>
    )
  }
}

export default ProfileEditForm
