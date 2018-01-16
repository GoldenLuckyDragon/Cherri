// import our constants
import React, { Component } from 'react'
import Checkout from './components/Checkout'
import './App.css'
import ProfileForm from './components/ProfileForm'
import ProfileEditForm from './components/ProfileEditForm'
// invoiceAPI should be below
import InvoiceForm from './components/InvoiceForm'
import Navigation from './components/navbar'
import * as profileAPI from './api/profiles'
// invoiceAPI should be below

import * as invoiceAPI from './api/invoices'
import AccountPage from './pages/AccountPage'
import RegisterForm from './components/RegisterForm'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { register } from './api/register'


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

  handleRegister = (event) => {
    event.preventDefault()
    const form = event.target
    const element = form.elements
    const email = element.email.value
    const password = element.password.value
    register({email, password})
    .then((data) => {
      const token = data.token
      console.log(token)
      if (token) {
      profileAPI.all(token)
        .then( movies =>
          this.setState({ movies, token })
      )}
    })
    console.log({ password, email })
    // console.log({token})
  }

  // handleProfileEditSubmission = (profile) => {
  //   this.setState(({profiles}) => {
  //     return { profiles: [profile].concat(profiles)}
  //   });
  //   // calling the save function from backend API route
  //   profileAPI.edit(profile);
  // }

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
            <Route path='/signup' render={
              () => (
                <div>
                { this.state.token && <Redirect to='/profile/create'/>
                }
                <RegisterForm onSignUp={this.handleRegister} profiles={profiles}/>
                </div>
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
