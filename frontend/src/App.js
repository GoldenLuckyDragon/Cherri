// import our constants
import React, { Component } from 'react'
import Checkout from './components/Checkout'
import './App.css'
import ProfileForm from './components/ProfileForm'
import Navigation from './components/navbar'
import Homelanding from './pages/HomePage'
import * as profileAPI from './api/profiles'
import AccountPage from './pages/AccountPage'
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
      console.log(profiles)
    })
    // HARD CODED profile for initial testing
    // this.setState({
    //   profiles: [
    //     {
    //       _id: "5a5316b00dbd7e37f7f32723",
    //       email: "jo@hotmail.com",
    //       password: "12345",
    //       factoryName: "Joe Abloe",
    //       address: "123 Fakeee St",
    //       hkid: "N-1191938",
    //       incorporationCertificate: "bbbb",
    //       paymentMethod: "cceeeccc",
    //       invoices: [
    //         {
    //         _id: "5a53199665da64386f09f6ba",
    //         invoiceNumber: "MKT-001-28t",
    //         amount: 2553.5,
    //         offerAmount: 2298.15,
    //         dueDate: "2018-05-01T00:00:00.000Z",
    //         expiryDate: "2018-02-01T00:00:00.000Z",
    //         status: "Pending",
    //         customerCompanyName: "Walmart",
    //         customerFirstname: "Mary",
    //         customerSurname: "Jones",
    //         salePurchaseAgreement: "",
    //         invoiceUpload: ""
    //         }
    //       ]
    //     }
    //   ]
    // });
  }

  handleProfileSubmission = (profile) => {
    this.setState(({profiles}) => {
      return { profiles: [profile].concat(profiles)}
    });
    profileAPI.save(profile);
  }

  render () {
    const {profiles} = this.state
    return (
      <Router>
      <div className='App'>
        {/* testing whether profiles is coming through from line17-line40 */}
        <Navigation />

        <Switch>
          <Route exact path='/' render={
            () => (
              <Homelanding />
            )
          }/>
          <Route path='/profiles' render={
              () => (
                <AccountPage profiles={profiles}/>
              )}/>
          <Route path='/profile/create' render={
              () => (
                <ProfileForm onSubmit={this.handleProfileSubmission}/>
              )}/>
        </Switch>
        <p className='App-intro'>

          {/*  our React STRIPE checkout component */}
          <Checkout
            name={'James Made This'}
            description={'Pay via stripe'}
            amount={1}
          />
        </p>

        <a href={STRIPE_URL} class='stripe-connect dark'><span>Connect with Stripe</span></a>
      </div>
      </Router>
    )
  }
}



export default App
