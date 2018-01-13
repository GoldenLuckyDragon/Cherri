import React from 'react'
import '../App.css'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import iphone from '../images/iphone.png'
import clock from '../images/clock.svg'
import upload from '../images/upload.svg'
import cash from '../images/cash.svg'

export class Homelanding extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }
  render () {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={8} md={12}>
            <br />
            <h2 className='color-white'>Need money?</h2>
            <p className='color-white'>
              Turn your invoices into cash today.
            </p>
            <Button>Sign Up</Button>
          </Col>
          <Col xs={4} md={12}>
            <img src={iphone} width='300' height='280' />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export class HomelandingTwo extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }
  render () {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={4} md={4}>
            <img src={upload} width='100' height='100' />
            <br />
            <p />
            1. Upload your unpaid invoices.
          </Col>
          <Col xs={4} md={4}>
            <img src={clock} width='100' height='100' />
            <br />
            <p />
            2. Fast approval process.
          </Col>
          <Col xs={4} md={4}>
            <img src={cash} width='100' height='100' />
            <br />
            <p />
            3. 90% of your invoice value paid upon approval.
          </Col>
        </Row>
        <br />
        <p />
        <Row className='show-grid'>
          <Button>Learn More</Button>
        </Row>
      </Grid>
    )
  }
}

export class HomelandingThree extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }
  render () {
    return (
      <Grid>
        <Row className='show-grid'>
          <p className='color-white'>Why Our Customers Love Us</p>
          <div class='card card-5' />
        </Row>
        <br />
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
