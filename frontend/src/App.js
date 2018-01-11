import React, { Component } from 'react'
import Checkout from './Checkout'
import './App.css'
import ProfileForm from './components/ProfileForm'
import Navigation from './components/navbar'
import Homelanding from './pages/HomePage'
import * as profileAPI from './api/profiles'
import AccountPage from './pages/AccountPage'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


// allow for env files
require('dotenv').config()

class App extends Component {
  state = { profiles: null }

  componentDidMount(){
    // calling the fetch functions from profileAPI file
    profileAPI.all()
    .then(profiles => {
      this.setState({ profiles })
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
            description={'Really!'}
            amount={1}
          />
        </p>
      </div>
      </Router>
    )
  }
}

export default App
