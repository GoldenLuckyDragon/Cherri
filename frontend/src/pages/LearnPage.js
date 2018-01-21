import React from 'react'
import '../App.css'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'
import iphone from '../images/iphone.png'
import clock from '../images/clock.svg'
import upload from '../images/upload.svg'
import cash from '../images/cash.svg'
import tick from '../images/tick.png'

export default () => {
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <br />
        <Grid>
          <Row className='show-grid'>
            <div className='card card-shadow'>
              <br />
              <br />
              <Col xs={12} sm={4}>
                <img src={upload} alt='Upload invoices to Cherri web application' width='50' height='50' />
                <br />
                <p />
                <img src={tick} alt='Upload invoices to Cherri web application' width='20' height='20' />
                <b>HIGH INVOICE CAP</b>
                <br />
                Upload any invoice with value up to US$3 million.
              </Col>
              <Col xs={12} sm={4}>
                <img src={clock} alt='Fast time upload for Cherri web application' width='50' height='50' />
                <br />
                <p />
                <img src={tick} alt='Upload invoices to Cherri web application' width='20' height='20' />
                <b>FAST TURNAROUND TIME</b>
                <br />
                Guaranteed response within 7 days.
              </Col>
              <Col xs={12} sm={4}>
                <img src={cash} alt='Get your invoices paid with Cherri web application' width='50' height='50' />
                <br />
                <p />
                <img src={tick} alt='Upload invoices to Cherri web application' width='20' height='20' />
                <b>ABOVE MARKET RETURNS</b>
                <br />
                Receive 90% of your invoice amount immediately.
                <br />
                <br />
              </Col>
            </div>
          </Row>
        </Grid>
      </Jumbotron>
      <Jumbotron className='jumbotron-white'>
        <Grid>
          <Row className='show-grid'>
            <Col><h3>What is Invoice Factoring?</h3>
            Invoice factoring is where a business sells its accounts receivables (usually in the form of unpaid invoices) to a third party in exchange for cash, often to ensure liquid cashflow to secure working capital to meet expenses, cover payroll or re-invest in the business.   For example, you may be a manufacturer of goods that are sold to a retailer overseas. The payment terms may be that you will not be paid for these goods until 90 days later; in the meantime, you are in need of cashflow to pay your staff and suppliers. Cherri Finance is a platform that allows you to upload these unpaid invoices, and receive payment of 90% of the invoice value within 7 days, upon approval.
          </Col>
          </Row>
          <Row className='show-grid'>
            <Col><h3>Why use Cherri Finance?</h3>
            Cherri Finance is a hassle-free online platform that allows you to sign up and upload your invoices with a few clicks of your mouse. The platform accepts invoices worth up to US$3 million, and offers a guaranteed response within 7 days. Upon approval, 90% of the invoice value will be paid to your account either via direct bank deposit or online through Stripe. You can upload as few or as many invoices as you like, giving you flexibility and control.
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    </div>
  )
}
