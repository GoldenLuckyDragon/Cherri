import React from 'react'
import Invoice from './Invoice'
import {Link} from 'react-router-dom'
import Checkout from '../components/Checkout'
import {Image, CloudinaryContext} from 'cloudinary-react'
var cloudinary = require('cloudinary')

export default function Profile ({
  _id,
  factoryName,
  address,
  hkid,
  incorporationCertificate,
  invoices,
  profile,
  invoice
}) {
  const henry = profile.find((p) => p._id === _id)
  return (
    <div>
      <br />
      <span>Factory Name: {henry.factoryName}</span>
      <br />
      <span>Address: {henry.address}</span>
      <br />
      <span>HKID:</span>
      <CloudinaryContext cloudName='cherri'>
        <Image publicId='companydocs/5a66880978baec24c24d0940_hkid.png' />
      </CloudinaryContext>
      <br />
      <br />
    </div>
  )
}
