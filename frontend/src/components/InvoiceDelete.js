import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
import {Redirect} from 'react-router-dom'

class InvoiceDelete extends React.Component {
  state = {
    redirect: false,
    invoice: this.props.invoice
  }

  handleFormSubmission = (event) => {
    event.preventDefault();
    this.setState({ redirect: true})
    this.props.onSubmit(this.state.invoice);
  }


  render() {
    const {redirect} = this.state
      return (
      <div>
        { redirect && <Redirect to='/dashboard'/>}

      </div>
    )
  }
}

export default InvoiceDelete
