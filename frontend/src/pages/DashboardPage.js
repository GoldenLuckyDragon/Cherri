import React from 'react'
import '../App.css'
import Navigation from '../components/navbar'
import { Jumbotron, Tab, Tabs } from 'react-bootstrap'
import Logo from '../components/Logo'
import * as invoiceAPI from '../api/invoices'
import Invoice from '../components/Invoice'
import Profile from '../components/Profile'
import PaymentMethod from '../components/PaymentMethod'

export default class DashboardPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: props.currentEmail,
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1

    }

    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this)
  }

  render () {
    const { _id, profiles, invoices, users, email } = this.props
    const user = users.account
    const profile = profiles.find((p) => p._id === user._id)
    const hasStripe = profile.stripeId

    console.log('********', hasStripe)

    return (
      <div>
        <Navigation />
        <Jumbotron className='jumbotron-blue'>
          <Logo />
          <br />
          <div className='card card-shadow'>
            <Tabs className='myClass' activeKey={this.state.activeTab} onSelect={this.handleSelect}>
              <Tab eventKey={1} title='Invoice History'>
                <Invoice profile={profiles} invoice={invoices} users={users} {...user} />
                <div class='btn-approved'> Approved </div>
                <div class='btn-declined'> Declined </div>
                <div class='btn-pending'> Pending </div>
                <div class='btn-expired'> Expired </div>
              </Tab>
              <Tab eventKey={2} title='Add Invoice'>
                <a href='/invoice/create' ><button type='submit' className='btn-blue'>Add Invoice</button></a>
                <br />
                <br />
              </Tab>
              <Tab eventKey={3} title='Account'>
                <Profile profile={profiles} invoice={invoices} users={users} {...user} />
              </Tab>
              <Tab eventKey={4} title='Payment Method'>
                {/* {console.log(user.profile)} */}
                <PaymentMethod email={email} profile={profiles} {...user} />
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
