import React from 'react'
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap'

const Homelanding = () => (
  <Jumbotron>
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
          <img src='../images/iphone.jpg' />
        </Col>
      </Row>
    </Grid>

  </Jumbotron>
)
export default Homelanding
