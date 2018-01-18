import React from 'react'
import '../App.css'
import Navigation from '../components/navbar'
import { Jumbotron, TabContent, TabPane, Row, Col, Tab, Tabs } from 'react-bootstrap'
import Logo from '../components/Logo'

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
      <Tabs className='myClass' activeKey={this.state.activeTab} onSelect={this.handleSelect}>
        <Tab eventKey={1} title='Payment History'>Tab 1 content</Tab>
        <Tab eventKey={2} title='Add Invoice'>Tab 2 content</Tab>
        <Tab eventKey={3} title='Account'>Tab 3 content</Tab>
      </Tabs>
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
          <div className='card'>
            {/* Set which tab the default is (tab 1) */}
            <Dashboard activeTab={1} />
          </div>
        </Jumbotron>
      </div>
    )
  }
  }

import Profile from '../components/Profile'
import decodeJWT from 'jwt-decode'

export default ({ token }) => {
  const decodedToken = decodeJWT(token)
  const email = decodedToken.email
  const id = decodedToken.sub
  return (
    <div>
      <Navigation />
      <h1>{email}</h1>
      <h1>{id}</h1>
      <a href={`/profile/create`} className='btn-blue border'>Create Profile</a>
    </div>
  )
}

// var currencyApi = require('fixer-io-node')

// Returns specific exchange rates

// currencyApi.specificRate('GBP', 'HKD').then(function (result) {
//   console.log(result.rates.GBP)
// }).catch(function (error) {
//   console.log(error)
// })
