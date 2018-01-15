import React from 'react'
import '../App.css'
import { Grid, Row, Col } from 'react-bootstrap'
import iphone from '../images/iphone.png'
import clock from '../images/clock.svg'
import upload from '../images/upload.svg'
import cash from '../images/cash.svg'
import jon from '../images/jon.png'
import james from '../images/james.png'
import carmen from '../images/carmen.png'

// First section (landing page - above the fold) of the home page
export class Homelanding extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }
  render () {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} sm={8}>
            <br />
            <h2 className='color-white'>Need money?</h2>
            <p className='color-white'>
              Turn your invoices into cash today.
            </p>
            <button type='button' className='btn-blue border'>Sign Up</button>
          </Col>
          <Col xs={12} sm={4}>
            <img src={iphone} alt='cherri factoring web application' width='300' height='280' />
          </Col>
        </Row>
      </Grid>
    )
  }
}

// Second section - how it works - below the fold of the home page
export class HomelandingTwo extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }
  render () {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} sm={4}>
            <img src={upload} alt='Upload invoices to Cherri web application' width='100' height='100' />
            <br />
            <p />
            1. Upload your unpaid invoices.
          </Col>
          <Col xs={12} sm={4}>
            <img src={clock} alt='Fast time upload for Cherri web application' width='100' height='100' />
            <br />
            <p />
            2. Fast approval process.
          </Col>
          <Col xs={12} sm={4}>
            <img src={cash} alt='Get your invoices paid with Cherri web application' width='100' height='100' />
            <br />
            <p />
            3. 90% of your invoice value paid upon approval.
          </Col>
        </Row>
        <br />
        <p />
        <Row className='show-grid'>
          <button type='button' className='btn-blue'>Learn More</button>
        </Row>
      </Grid>
    )
  }
}

// Third section - testimonials - below the fold of the home page
export class HomelandingThree extends React.Component {
  render () {
    return (
      <Grid>
        <Row className='show-grid'>
          <p className='color-white'>Why Our Customers Love Us</p>
          <br />
          <br />
          <br />
        </Row>
        <div className='card'>
          <Row className='show-grid'>
            <div id='cf'>
              <img className='top' src={carmen} width={150} height={150} />
              <img className='top' src={jon} width={150} height={150} />
              <img className='top' src={james} width={150} height={150} />
            </div>
          </Row>
          <Row className='show-grid'>
            <div id='testimonial'>
              <div className='transition-text'>"Cherri has helped my business through good times and bad: with the accounts receivables financing they offer, I now have consistent cashflow, allowing me to pay my staff and suppliers without hassle."
              <p>- Carmen, Jinx Co.</p>
                <br /></div>
              <div className='transition-text'>"The turn around time with Cherri is lightning fast - within 48 hours, the platform had paid me 90% of my invoices in cash. I can't recommend them highly enough!"
              <p>- Jon, Ablondi Brokers</p>
                <br /></div>
              <div className='transition-text'>"My customers usually take around 90 days to pay my factory's bills, which makes managing cashflow difficult. From day one, Cherri has been integral to my business model: it pays for my unpaid invoices upfront, allowing me to focus on growing my company."
                <p>- James, Frankincense Factories</p>
                <br /></div>
            </div>
          </Row>
        </div>
      </Grid>
    )
  }
}
var currencyApi = require('fixer-io-node')

// Returns specific exchange rates

currencyApi.specificRate('GBP', 'HKD').then(function (result) {
  console.log(result.rates.GBP)
}).catch(function (error) {
  console.log(error)
})
