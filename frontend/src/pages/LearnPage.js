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
          <Row className='show-grid' />
          <Row className='show-grid'>
            <div className='card card-shadow'>
              <br />
              QUICK STATS
              <br />
              <br />
              <Col xs={12} sm={4}>
                <img src={upload} alt='Upload invoices to Cherri web application' width='50' height='50' />
                <br />
                <p />
                <img src={tick} alt='Upload invoices to Cherri web application' width='20' height='20' />
                <b>HIGH INVOICE</b>
                <br />
                US$3 million.
              </Col>
              <Col xs={12} sm={4}>
                <img src={clock} alt='Fast time upload for Cherri web application' width='50' height='50' />
                <br />
                <p />
                <b>MAX APPROVAL TURNAROUND TIME</b>
                <br />
                7 days.
              </Col>
              <Col xs={12} sm={4}>
                <img src={cash} alt='Get your invoices paid with Cherri web application' width='50' height='50' />
                <br />
                <p />
                3. 90% of your invoice value paid upon approval.
              </Col>
              <br />
            </div>
          </Row>
          <Row className='show-grid' />

        </Grid>

        What is Invoice Factoring?
        Invoice factoring is a financial transaction whereby a business sells its accounts receivable to a factoring company to free up their cash; usually to secure working capital to meet expenses, cover payroll or expand their sales. Invoice factoring lets you turn current, unpaid invoices, into cash. “Invoice financing”, “accounts receivable financing” and “receivables financing” are all interchangeable terms used for factoring. The generous terms requested by your clients means that invoices can be outstanding for 30, 60, or 90 days before payment arrives. Meanwhile, without the cash, you’re passing on opportunities to expand your business or falling behind on important expenses, like payroll. The good news is that much of this frustration can be reduced or eliminated with factoring.

        There are usually three parties involved in a receivable financing transaction: the company that issued the invoice, their customer who owes payment on the invoice (also known as the account debtor), and the financing company who can supply the cash (often referred to as the factor).

How Invoice Factoring Works
After a company delivers the product or service to their customer, they issue an invoice. The company then “sells” the invoice to the factor, and in return receives an advance, typically between 70-90% of the value of the invoice. With the cash on hand, the company can take on more work, pay employees or buy materials, supplies and inventory. After the debtor pays the outstanding invoice, the business receives a “rebate” for the remainder of the funds, minus a fee that is based on the term and value of the invoice. In the end all three parties benefit: the customer gets cash upfront, their customer gets favorable payment terms, and the financier collects a fee.

BlueVine, a modern approach to receivables factoring
BlueVine specializes in invoice financing for the 21st century. With a hassle-free online solution, credit lines up to $2 million, and funds available in as little as one business day, you have financing at the click of a button, and can pick up the phone and speak to our U.S.-based client success team at any time.

BlueVine’s quick, simple, and transparent factoring solution lets you get paid on day one for invoices due in 7-90 days. You can advance as many invoices as you like, as often as you like, giving you maximum control over your costs. We don’t require long-term contracts or commitments, and we offer non-notification factoring that gives you complete control over your customer relationships.

If you’re interested in learning more about invoice financing and you value speed, simplicity, and transparency, give us a try, or give us a call with any questions: 1 (888) 452-7805. We’re here to serve you. You can also read BlueVine reviews to see what others have to say about us.
      </Jumbotron>
    </div>
  )
}
