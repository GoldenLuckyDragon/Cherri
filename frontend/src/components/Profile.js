import React from 'react'
import Invoice from './Invoice'
import {Link} from 'react-router-dom'
import Checkout from '../components/Checkout'
import {Image, CloudinaryContext} from 'cloudinary-react'
import { Grid, Row, Col } from 'react-bootstrap'
var cloudinary = require('cloudinary')

export default function Profile ({
  _id,
  factoryName,
  address,
  hkid,
  incorporationCertificate,
  invoices,
  profile,
  invoice,
  users
}) {
  const henry = profile.find((p) => p._id === _id)
  const userid = users._id
  const hkidImg = `companydocs/${userid}_hkid.png`
  const icImg = `companydocs/${userid}_ic.png`
  return (
    <div>
      <Grid>
        <h3>ACCOUNT DETAILS</h3>
        <Row className='show-grid'>
          <Col xs={12} sm={6}>
            <br />
            <CloudinaryContext cloudName='cherri'>
              <Image publicId={icImg} width='150' />
            </CloudinaryContext>
            <br />
            <CloudinaryContext cloudName='cherri'>
              <Image publicId={hkidImg} width='150' />
            </CloudinaryContext>
            <br />
          </Col>
          <Col xs={12} sm={2}>
            <br />
            <span><b>Factory Name:</b></span>
            <br />
            <span><b>Address:</b></span>
          </Col>
          <Col xs={12} sm={2}>
            <br />
            <span>{henry.factoryName}</span>
            <br />
            <span>{henry.address}</span>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
