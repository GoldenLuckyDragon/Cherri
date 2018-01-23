import React from 'react'
import '../App.css'
import Navigation from '../components/navbar'
import { Jumbotron, Tab, Tabs } from 'react-bootstrap'
import Logo from '../components/Logo'
import * as invoiceAPI from '../api/invoices'
import InvoicesAdmin from '../components/InvoicesAdmin'
import ProfilesAdmin from '../components/ProfilesAdmin'

export default class AdminDashboardPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: props.email,
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1

    }

    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this)
  }

  render () {
    const { profiles, invoices, users, currentEmail } = this.props
    const user = users.account

    return (
      <div>
        <Navigation />
        <Jumbotron className='jumbotron-blue'>
          <Logo />
          <br />
          <div className='card card-shadow'>
            <Tabs className='myClass' activeKey={this.state.activeTab} onSelect={this.handleSelect}>
              <Tab eventKey={1} title='Invoices'>
                {/* <InvoicesAdmin profile={profiles} invoice={invoices} users={users} {...user} /> */}
              </Tab>
              <Tab eventKey={2} title='Factories'>
                {/* <ProfilesAdmin profile={profiles} invoice={invoices} users={users} {...user} /> */}
                <br />
              </Tab>
            </Tabs>
          </div>
        </Jumbotron>
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

// var currencyApi = require('fixer-io-node')

// Returns specific exchange rates

// currencyApi.specificRate('GBP', 'HKD').then(function (result) {
//   console.log(result.rates.GBP)
// }).catch(function (error) {
//   console.log(error)
// })
