import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import iphone from '../images/iphone.png'

const Homelanding = () => (
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
        <img src={iphone} width='300' height='280' />
      </Col>
    </Row>
  </Grid>

)

var currencyApi = require('fixer-io-node')

// Returns specific exchange rates

currencyApi.specificRate('GBP', 'HKD').then(function (result) {
  console.log(result.rates.GBP)
}).catch(function (error) {
  console.log(error)
})

export default Homelanding
