import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import logo from '../images/logo.png'

export default class Logo extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} md={6}>
            <img src={logo} className='logo' />
          </Col>
        </Row>
      </Grid>
    )
  }
}
