import React, { Component } from 'react'
import '../App.css'
import Navigation from '../components/navbar'
import { Jumbotron, Tab, Tabs, Table } from 'react-bootstrap'
import Logo from '../components/Logo'
import Profile from '../components/Profile'
// import decodeJWT from 'jwt-decode'
// import InvoiceForm from '../components/InvoiceForm'
import axios from 'axios'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'

class InvoiceHistory extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gallery: []
    }
  }
  componentDidMount () {
    // Request for images tagged invoices
    axios.get('https://res.cloudinary.com/cherri/image/list/invoice.json')
            .then(res => {
              console.log(res.data.resources)
              this.setState({gallery: res.data.resources})
            })
  }
  uploadWidget () {
  }

  render () {
    // Set variable below to be all invoices associated with the profile
    const variable = '_inv'
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Item No.</th>
              <th>Due Date</th>
              <th>Invoice No.</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>

        <Image cloudName='cherri' publicId={`invoices/${variable}.png`} height='300' crop='scale' />
      </div>

    )
  }
}

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
            <InvoiceHistory />
            <br />
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
