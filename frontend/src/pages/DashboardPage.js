import React from 'react'
import '../App.css'
import Navigation from '../components/navbar'
import { Jumbotron, TabContent, TabPane, Row, Col, Tab, Tabs } from 'react-bootstrap'
import Logo from '../components/Logo'
import Profile from '../components/Profile'
import decodeJWT from 'jwt-decode'
import InvoiceForm from '../components/InvoiceForm'

class Dashboard extends React.Component {
  constructor (props) {
    super()
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1
    }

    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this)
  }

  render () {
    return (
      <div>
        <br />
        <Tabs className='myClass' activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Tab eventKey={1} title='Payment History'>
            <a href={`/invoice/create`} className='btn-blue border'>Add Invoice</a>
            <br />
          </Tab>
          <Tab eventKey={2} title='Account'>
            <a href={`/profile/create`} className='btn-blue border'>Create Profile</a>
            <Profile />
          </Tab>
        </Tabs>
      </div>
    )
  }

  handleSelect (selectedTab) {
    // The active tab must be set into the state so that the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab
    })
  }
}

export default class DashboardPage extends React.Component {
  render () {
    return (
      <div>
        <Navigation />
        <Jumbotron className='jumbotron-blue'>
          <Logo />
          <div className='card card-shadow'>
            <br />
            DASHBOARD
            {/* Set which tab the default is (tab 1) */}
            <Dashboard activeTab={1} />
          </div>
        </Jumbotron>
      </div>
    )
  }
  }

// var currencyApi = require('fixer-io-node')

// Returns specific exchange rates

// currencyApi.specificRate('GBP', 'HKD').then(function (result) {
//   console.log(result.rates.GBP)
// }).catch(function (error) {
//   console.log(error)
// })
