import React from 'react'
import '../App.css'
import Navigation from '../components/navbar'
import { Jumbotron, Tab, Tabs } from 'react-bootstrap'
import Logo from '../components/Logo'
// import InvoiceForm from '../components/InvoiceForm'
// import ProfileList from '../components/ProfileList'
import Invoice from '../components/Invoice'
import Profile from '../components/Profile'
// import decodeJWT from 'jwt-decode'

export default class DashboardPage extends React.Component {
  constructor (props, profiles, invoices, user) {
    super()
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1
    }

    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this)
  }

  render () {
    const { profiles, invoices, user } = this.state
    return (
      <div>
        <Navigation />
        <Jumbotron className='jumbotron-blue'>
          <Logo />
          <br />
          <div className='card card-shadow'>
            <Tabs className='myClass' activeKey={this.state.activeTab} onSelect={this.handleSelect}>
              <Tab eventKey={1} title='Add Invoice'>
                {/* <InvoiceForm />
                <a href={`/invoice/create`} className='btn-blue border'>Create Invoice</a> */}
                <br />
              </Tab>
              <Tab eventKey={2} title='Invoice History'>
                <Invoice profile={profiles} invoice={invoices} {...user} />
              </Tab>
              <Tab eventKey={3} title='Account'>
                <Profile profile={profiles} invoice={invoices} {...user} />
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

//
//
// export default class DashboardPage extends React.Component {
//   render () {
//     return (
//       <div>
//         <Navigation />
//         <Jumbotron className='jumbotron-blue'>
//           <Logo />
//           <div className='card card-shadow'>
//             <br />
//             DASHBOARD
//             {/* Set which tab the default is (tab 1) */}
//             <Dashboard activeTab={1} />
//           </div>
//         </Jumbotron>
//       </div>
//     )
//   }
//   }

// var currencyApi = require('fixer-io-node')

// Returns specific exchange rates

// currencyApi.specificRate('GBP', 'HKD').then(function (result) {
//   console.log(result.rates.GBP)
// }).catch(function (error) {
//   console.log(error)
// })
