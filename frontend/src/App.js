// import our constants
import React, { Component } from 'react'
import './App.css'
// invoiceAPI should be below
import * as profileAPI from './api/profiles'
import ProfileForm from './components/ProfileForm'
import ProfileEditForm from './components/ProfileEditForm'
// imports associated with invoice
import * as invoiceAPI from './api/invoices'
import InvoiceForm from './components/InvoiceForm'
// imports associated with page selection
import AccountPage from './pages/AccountPage'
import HomePage from './pages/HomePage'
// imports associated with signing up & signing in
import RegisterForm from './components/RegisterForm'
import { register } from './api/register'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Our Stripe imports
import { STRIPE_URL   } from './constants/stripe'
import ChargesPage from './pages/ChargesPage'


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
      // test log to ensure that  profile information is coming through from backend
    })

    // setting a state when invoiceAPI is called
    invoiceAPI.all()
    .then(invoices => {
      this.setState({ invoices })
      // {/*test log to ensure that  profile information is coming through from backend*/}
    })
  }

  handleProfileSubmission = (profile) => {
    this.setState( ({ profiles }) => {
      return { profiles: [profile].concat( profiles )}
    });
    profileAPI.save( profile );
  }

  // Event handler for registration of new User
  handleRegister = (event) => {
    event.preventDefault()
    // declaration of const
    const form = event.target
    const element = form.elements
    const email = element.email.value
    const password = element.password.value
    register({email, password})

    // our backend register api returns a promise with our token data
    .then((data) => {
      const token = data.token
      console.log(token)
      if (token) {
        //show profiles
      profileAPI.all(token)
        .then( profiles =>
          this.setState({ profiles, token })
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
        <a  href={STRIPE_URL}> Connect with stripe </a>
        {/*  Switch statment to handle all our routes */}
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
               {/* our charges route for testing making a charge between two of our stripe customers */}
             <Route path='/charges' render={
               () => (
                 <div>
                   <ChargesPage />
                 </div>
               )}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App
