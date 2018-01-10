import React, { Component } from 'react'
import Checkout from './Checkout'
import './App.css'
import ProfileList from './components/ProfileList'
import ProfileForm from './components/ProfileForm'
import Navigation from './components/navbar'
import Homelanding from './pages/HomePage'
import * as profileAPI from './api/profiles'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


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
        <Homelanding />
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div>
          {
            profiles ? (
              <ProfileList profiles={profiles} />
            ) : ('Loading...')
          }
        </div>
        <ProfileForm onSubmit={this.handleProfileSubmission}/>
        <Navigation />
        <Homelanding />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
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
