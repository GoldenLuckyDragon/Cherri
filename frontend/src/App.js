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
  state = {profiles: null}

  componentDidMount(){
    // movieAPI.all()
    // .then(movies => {
    //   this.setState({ movies })
    // })
    this.setState({
      profiles: [
        {
          _id: "5a5316b00dbd7e37f7f32723",
          email: "jo@hotmail.com",
          password: "12345",
          factory_name: "Jo Ablo",
          address: "123 Fake St",
          hkid: "N-1191938",
          incorporation_certificate: "bbbb",
          payment_method: "ccccc",
          invoices: [
            {
            _id: "5a53199665da64386f09f6ba",
            invoice_number: "MKT-001-28t",
            amount: 2553.5,
            offer_amount: 2298.15,
            due_date: "2018-05-01T00:00:00.000Z",
            expiry_date: "2018-02-01T00:00:00.000Z",
            status: "Pending",
            customer_company_name: "Walmart",
            customer_firstname: "Mary",
            customer_surname: "Jones",
            sale_purchase_agreement: "",
            invoice_upload: ""
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
