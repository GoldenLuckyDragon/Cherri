// import our constants
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// invoiceAPI should be below
import * as profileAPI from './api/profiles'
import ProfileForm from './components/ProfileForm'
import ProfileEditForm from './components/ProfileEditForm'
import Navigation from './components/navbar'
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
import UploadHkid from './components/UploadHkid'
import UploadIc from './components/UploadIc'
import * as auth from './api/signin'
import * as userAPI from './api/user'
// imports associated with invoice
import * as invoiceAPI from './api/invoices'
import Invoice from './components/Invoice'
import InvoiceForm from './components/InvoiceForm'
import InvoiceUpload from './components/InvoiceUpload'
import InvoiceSpaUpload from './components/InvoiceSpaUpload'
import InvoiceDetails from './components/InvoiceDetails'
// imports associated with Stripe
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
    invoices: null,
    currentEmail: null
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
      console.log('in App.js with response from server. setting state for currentEmail: ', email);
      this.setState({ currentEmail: email })
      userAPI.all()
        // .populate({
        //   path: 'account',
        //   populate: [{
        //     path: 'invoices'
        //   }]
      // })
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
    .then((json) => {
      console.log('App.js signed in and setting state with email: ', email);
      this.setState({ currentEmail: email })
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
          <Route path='/about' render={
              () => (
                <AboutPage token={ auth.token() }/>
              )}/>
          <Route path='/dashboard' render={
              () => {
                if (users && profiles && invoices) {
                  return <DashboardPage users={users} invoices={invoices} profiles={profiles}/>
                } else {
                  return null
                }
              }}/>
          <Route path='/invoices' render={
              () => (
                <AccountPage users={users} invoices={invoices} profiles={profiles}/>
              )}/>
          <Route path='/profile/create' render={
              () => (
                <div>
                  { auth.hasProfile() && <Redirect to='/uploadHkid'/>
                  }
                  <ProfileForm onSubmit={this.handleProfileSubmission}/>
                </div>
              )}/>
          <Route path='/uploadHkid' render={
              () => {
                if (auth.isSignedIn() && users) {
                  return <UploadHkid users={users}/>
                } else {
                  return null
                }
              }}/>
          <Route path='/uploadIc' render={
              () => {
                if (auth.isSignedIn() && users) {
                  return <UploadIc users={users}/>
                } else {
                  return null
                }
              }}/>
          <Route path='/signup' render={
            () => (
              <div>
              { auth.isSignedIn() && <Redirect to='/profile/create'/>
              }
              <RegisterForm onSignUp={this.handleRegister} profiles={profiles}/>
              </div>
              )}/>
          <Route path='/signin' render={
            () => (
              <div>
                { auth.isSignedIn() && <Redirect to='/profiles'/> }
                <SignInForm onSignIn={this.handleSignIn} profiles={profiles}/>
              </div>
              )}/>
          <Route path='/invoice/:id' render={
            ({ match }) => {
              if ( invoices ) {
              const id = match.params.id
              console.log(id)
              console.log(invoices)
              const invoice = invoices.find((i) => i._id === id)
              console.log(invoice)
              return (
                <div>
                  <InvoiceDetails invoice={invoice} />
                  <br />
                </div>
              )
            } else {
              return <h1>broken</h1>
            }
            }} />
          <Route path='/invoice/create' render={
              () => (
                <div>
                  <InvoiceForm onSubmit={this.handleInvoiceSubmission}/>
                </div>
              )}/>
               {/* our charges route for testing making a charge between two of our stripe customers */}
         <Route path='/invoice/upload' render={
             () => {
                 if (auth.isSignedIn() && users && profiles) {
                   return <InvoiceUpload profile={profiles} users={users}/>
                 } else {
                   return null
                 }
             }}/>
         <Route path='/invoice/spaupload' render={
           () => {
               if (auth.isSignedIn() && users && profiles) {
                 return <InvoiceSpaUpload profile={profiles} users={users}/>
               } else {
                 return null
               }
           }}/>
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
// comment for push
export default App
