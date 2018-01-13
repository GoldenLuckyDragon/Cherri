import React from 'react'
import '../App.css'
import { Button, Grid, Row, Col, Carousel } from 'react-bootstrap'
import iphone from '../images/iphone.png'
import clock from '../images/clock.svg'
import upload from '../images/upload.svg'
import cash from '../images/cash.svg'
import jon from '../images/jon.png'
import james from '../images/james.png'

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
            <img src={iphone} alt='cherri factoring web application' width='300' height='280' />
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
            <img src={upload} alt='Upload invoices to Cherri web application' width='100' height='100' />
            <br />
            <p />
            1. Upload your unpaid invoices.
          </Col>
          <Col xs={4} md={4}>
            <img src={clock} alt='Fast time upload for Cherri web application' width='100' height='100' />
            <br />
            <p />
            2. Fast approval process.
          </Col>
          <Col xs={4} md={4}>
            <img src={cash} alt='Get your invoices paid with Cherri web application' width='100' height='100' />
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
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      direction: null
    }
  }

  handleSelect (selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    })
  }

  render () {
    return (
      <Grid>
        <Row className='show-grid'>
          <p className='color-white'>Why Our Customers Love Us</p>
          <div className='card card-5'>
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={(i, e) => this.handleSelect(i, e)}>
              <Carousel.Item>
                <img width={300} height={300} alt='900x500' src={jon} className='center' />
                <Carousel.Caption>
                  <h3>Jon Ablondi</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={300} height={300} alt='900x500' src={james} />
                <Carousel.Caption>
                  <h3>James Marotta</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
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
