import React, { Component } from 'react'
import logo from './logo.svg'
import Checkout from './Checkout'
import './App.css'
import ProfileList from './components/ProfileList'
import Navigation from './components/navbar'
import Homelanding from './pages/HomePage'

// allow for env files
require('dotenv').config()

class App extends Component {
  state = { profiles: null}

  componentDidMount(){
    this.setState({
      profiles: [
        {
          _id: "5a5316b00dbd7e37f7f32723",
          email: "jo@hotmail.com",
          password: "12345",
          factory_name: "Jo Ablo",
          address: "123 Fake St",
          hkid: "N-1191938",
          incorporationCertificate: "bbbb",
          paymentMethod: "ccccc",
          invoices: [
            {
            _id: "5a53199665da64386f09f6ba",
            invoiceNumber: "MKT-001-28t",
            amount: 2553.5,
            offerAmount: 2298.15,
            dueDate: "2018-05-01T00:00:00.000Z",
            expiryDate: "2018-02-01T00:00:00.000Z",
            status: "Pending",
            customerCompanyName: "Walmart",
            customerFirstname: "Mary",
            customerSurname: "Jones",
            salePurchaseAgreement: "",
            invoiceUpload: ""
            }
          ]
        }
      ]
    });
  }

  render () {
    const {profiles} = this.state
    return (
      <div className='App'>
        {/* testing whether profiles is coming through from line17-line40 */}
        <div>
          {
            profiles ? (
              <ProfileList profiles={profiles} />
            ) : ('Loading...')
          }
        </div>
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
    )
  }
}

export default App
