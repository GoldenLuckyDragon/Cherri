import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'
import { render } from 'react-dom'
// import cloudinary from 'cloudinary-react'
var cloudinary = require('cloudinary')

require('dotenv').config()

// Set a constant of invoice to be the invoice ID that was passed in from the InvoiceForm page.
const invoice = ''
const token = window.localStorage.getItem('token')

export default class InvoiceUpload extends Component {
  state = { redirect: false}

  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target
    // const salePurchaseAgreement = elements['salePurchaseAgreement'].value
    const invoiceUpload = elements['invoiceUpload'].value
    this.props.onSubmit({invoiceUpload})
    this.setState({ redirect: true })
  }

  handleUploadClick = (event) => {
    window.cloudinary.openUploadWidget({ cloud_name: 'Cherri', upload_preset: 'cherri', public_id: `${invoice}_spa`, folder: 'invoices', tags:['spa']},
      function(error, result) { console.log(error, result) });
  }
    render () {
          return (
            <div>
              <Navigation />
              <Jumbotron className='jumbotron-blue'>
                <Logo />
                  <form>
                  <a classname='btn-blue' onClick={this.handleUploadClick} id='upload_widget_opener'>Upload Your Signed Sale and Purchase Agreement</a>
                  <br />
                  <a href={`/Dashboard`} className='btn-blue'>Submit</a>
                  </form>
              </Jumbotron>
            </div>
    )
  }
}
