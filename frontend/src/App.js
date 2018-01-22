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
import InvoiceUpload from './components/InvoiceUpload'
// imports associated with page selection
import AboutPage from './pages/about.js'
import AccountPage from './pages/AccountPage'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import LearnPage from './pages/LearnPage'
// imports associated with signing up & signing in
import RegisterForm from './components/RegisterForm'
import SignInForm from './components/SignInForm'
import SignOutForm from './components/SignOutForm'
import * as auth from './api/signin'
import * as userAPI from './api/user'
import Navigation from './components/navbar'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


// Our Stripe imports
import { STRIPE_URL   } from './constants/stripe'
import ChargesPage from './pages/ChargesPage'
// stats const is taken from signin as auth.sendStats


// allow for env files
require('dotenv').config()

// our main page app
class App extends Component {
  state = {
    profiles: null,
    users: null,
    invoices: null
  }

  componentDidMount(){
    // calling the fetch functions from profileAPI file
    profileAPI.all()
    .then(profiles => {
      // console.log(profiles)
      this.setState({ profiles })
      // test log to ensure that  profile information is coming through from backend
    })

    // setting a state when invoiceAPI is called
    invoiceAPI.all()
    .then(invoices => {
      this.setState({ invoices })
      // {/*test log to ensure that  profile information is coming through from backend*/}
    })

    // setting a state when userAPI is called
    userAPI.all()
    .then(users => {
      this.setState({ users })
      // {/*test log to ensure that  profile information is coming through from backend*/}
    })
  }

  handleProfileSubmission = (profile) => {
    this.setState(({profiles}) => {
      return { profiles: [profile].concat(profiles)}
    });
    profileAPI.save(profile);
  }

  // // Event handler for registration of new User
  // handleRegister = (event) => {
  //   event.preventDefault()
  //   // declaration of const
  //   const form = event.target
  //   const element = form.elements
  //   const email = element.email.value
  //   const account = '5a63a30b4db988e620265bff'
  //   const password = element.password.value
  //   auth.register({email, password, account})
  //   .then(() => {
  //     profileAPI.all()
  //       .then( profiles =>
  //         this.setState({ profiles })
  //     )}
  //   )
  //   console.log({ password, email, account})
  // }

  handleRegister = (event) => {
    event.preventDefault()
    // declaration of const
    const form = event.target
    const element = form.elements
    const email = element.email.value
    const account = '5a63a30b4db988e620265bff'
    const password = element.password.value
    auth.register({email, password, account})
    .then(() => {
      userAPI.all()
        .populate({
          path: 'account',
          populate: [{
            path: 'invoices'
          }]
        })
        .then( users =>
          this.setState({ users })
      )}
    )
    // console.log({ password, email, account})
  }

  // Event handler for signin of existing User
  handleSignIn = (event) => {
    event.preventDefault()
    // declaration of const
    const form = event.target
    const element = form.elements
    const email = element.email.value
    const password = element.password.value
    auth.signIn({email, password})
    .then(() => {
      userAPI.all()
        .then( users =>
          // console.log(profiles)
          this.setState({ users })
      )}
    )
    // console.log({ password, email })
    // console.log({token})
  }

  // handleProfileEditSubmission = (profile) => {
  //   this.setState(({profiles}) => {
  //     return { profiles: [profile].concat(profiles)}
  //   });
  //   // calling the save function from backend API route
  //   profileAPI.edit(profile);
  // }

  handleSignOut = () => {
    auth.signOut()
    this.setState({profiles:null})
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
    const {users, invoices, profiles} = this.state
    return (
      <Router>
      <div className='App'>
        <Navigation />
        <a href={STRIPE_URL}> Connect with Stripe </a>
        {/*  Switch statment to handle all our routes */}
        <Switch>
          <Route exact path='/' render={
              () => (
                <HomePage />
              )}/>
          <Route path='/learnmore' render={
              () => (
                <LearnPage/>
              )}/>
          <Route path='/about' render={() => (
              <AboutPage token={ auth.token() }/>
            )}/>
          <Route path='/dashboard' render={
              () => (
                <DashboardPage token={ auth.token() }/>
              )}/>
          <Route path='/profiles' render={
              () => (
                <AccountPage users={users}
                  invoices={invoices} profiles={profiles}/>
              )}/>
          <Route path='/invoices' render={
              () => (
                <AccountPage users={users} invoices={invoices} profiles={profiles}/>
              )}/>
          <Route path='/profile/create' render={
              () => (
                <ProfileForm onSubmit={this.handleProfileSubmission}/>
              )}/>
          <Route path='/signup' render={
            () => (
              <div>
              { auth.isSignedIn() && <Redirect to='/profile/create'/>
              }
              <RegisterForm onSignUp={this.handleRegister} profiles={profiles}/>
              </div>
              )}/>
          <Route path='/dashboard' render={
            () => (
              <div>
                <DashboardPage profiles={profiles} token={auth.token()}/>
              </div>
              )}/>
          <Route path='/signin' render={
            () => (
              <div>
                { auth.isSignedIn() && <Redirect to='/profiles'/> }
                <SignInForm onSignIn={this.handleSignIn} profiles={profiles}/>
              </div>
              )}/>
          <Route path='/invoice/create' render={
              () => (
                <div>
                  <InvoiceForm onSubmit={this.handleInvoiceSubmission}/>
                </div>
              )}/>
               {/* our charges route for testing making a charge between two of our stripe customers */}
         <Route path='/invoice/upload' render={
             () => (
               <InvoiceUpload/>
             )}/>
          <Route path='/charges' render={
               () => (
                 <div>
                   <ChargesPage token={ auth.token() } />
                 </div>
               )}/>
          <Route path='/signout' render={() => (
                <SignOutForm onSignOut={this.handleSignOut}/>
              )}/>
          {/* <Route path='/profile/edit' render={
              () => (
                <ProfileEditForm onSubmit={this.handleProfileEditSubmission}/>
              )}/> */}
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App
