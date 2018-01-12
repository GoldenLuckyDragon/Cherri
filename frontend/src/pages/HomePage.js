import React from 'react'
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap'
import iphone from '../images/iphone.jpg'
import logo from '../images/logo.png'

const Homelanding = () => (
  <Jumbotron>
    <img src={logo} class='logo' />
    <Grid>
      <Row className='show-grid'>
        <Col xs={8} md={8}>
          <br />
          <h1>Need money?</h1>
          <p>
          Turn your invoices into cash today.
          </p>
          <Button>Sign Up</Button>
        </Col>
        <Col xs={4} md={4}>
          {/* <img src={logo} width='100' height='50' /> */}
        </Col>
      </Row>
    </Grid>
  </Jumbotron>
)

var currencyApi = require('fixer-io-node')

// The function returns the latest currency exchange rates with EURO as its base currency

// currencyApi.latest('latest').then(function (result) {
//   console.log(result)
// }).catch(function (error) {
//   console.log(error)
// })

// The function returns the latest currency rates passing HKD as its base currency. Other currencies like GBP, AUD, EUR, BGN etc can be used

currencyApi.base('HKD').then(function (result) {
  console.log(result)
}).catch(function (error) {
  console.log(error)
})

// Returns specific exchange rates

currencyApi.specificRate('GDP', 'HKD').then(function (result) {
  console.log(result)
}).catch(function (error) {
  console.log(error)
})

export default Homelanding
