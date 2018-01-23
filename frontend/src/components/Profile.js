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
  invoice,
  users
}) {
  const henry = profile.find((p) => p._id === _id)
  const userid = users._id
  const hkidImg = `companydocs/${userid}_hkid.png`
  const icImg = `companydocs/${userid}_ic.png`
  return (
    <div>
      <br />
      <span>Factory Name: {henry.factoryName}</span>
      <hr />
      <span>Address: {henry.address}</span>
      <hr />
      <span>HKID:</span>
      <CloudinaryContext cloudName='cherri'>
        <Image publicId={hkidImg} width='150' />
      </CloudinaryContext>
      <hr />
      <span>Incorporation Certificate:</span>
      <CloudinaryContext cloudName='cherri'>
        <Image publicId={icImg} width='150' />
      </CloudinaryContext>
      <hr />
    </div>
  )
}
