// import our constants
import React, { Component } from 'react'
import Checkout from './components/Checkout'
import './App.css'
import ProfileForm from './components/ProfileForm'
import ProfileEditForm from './components/ProfileEditForm'
import InvoiceForm from './components/InvoiceForm'
import Navigation from './components/Navbar'
import * as profileAPI from './api/profiles'
import * as invoiceAPI from './api/invoices'
import AccountPage from './pages/AccountPage'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


// Our Stripe connect url
const STRIPE_URL = 'https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_BjHuFmrEKXcxfPWEGG7eFkFienrbbAs5&scope=read_write'

// allow for env files
require('dotenv').config()

// our main page app
class App extends Component {
  state = { profiles: null }

  componentDidMount(){
    // calling the fetch functions from profileAPI file
    profileAPI.all()
    .then(profiles => {
      this.setState({ profiles })
      // console.log(profiles)
    })
    // setting a state when invoiceAPI is called
    invoiceAPI.all()
    .then(invoices => {
      this.setState({ invoices })
      // console.log(invoices)
    })
  }
  // event handler for Profile create
  handleProfileSubmission = (profile) => {
    this.setState(({profiles}) => {
      return { profiles: [profile].concat(profiles)}
    });
    // calling the save function from backend API route
    profileAPI.save(profile);
  }

  handleProfileEditSubmission = (profile) => {
    this.setState(({profiles}) => {
      return { profiles: [profile].concat(profiles)}
    });
    // calling the save function from backend API route
    profileAPI.edit(profile);
  }

  // event handler for Invoice create
  handleInvoiceSubmission = (invoice) => {
    this.setState(({invoices}) => {
      return { invoices: [invoice].concat(invoices)}
    });
    // calling the save function from backend API route
    invoiceAPI.save(invoice);
  }

  render () {
    const {profiles} = this.state
    return (
      <Router>
      <div className='App'>
        <Navigation />
          <Switch>
            <Route exact path='/' render={
                () => (
                  <HomePage />
                )}/>
            <Route path='/profiles' render={
                () => (
                  <AccountPage profiles={profiles}/>
                )}/>
            <Route path='/profile/create' render={
                () => (
                  <ProfileForm onSubmit={this.handleProfileSubmission}/>
                )}/>
            <Route path='/profile/edit' render={
                () => (
                  <ProfileEditForm onSubmit={this.handleProfileEditSubmission}/>
                )}/>
            <Route path='/invoice/create' render={
                () => (
                  <InvoiceForm onSubmit={this.handleInvoiceSubmission}/>
                )}/>
          </Switch>
      </div>
      </Router>
    )
  }
}

export default App
