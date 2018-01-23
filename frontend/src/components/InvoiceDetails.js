import React from 'react'
import Invoice from './Invoice'
import {Link} from 'react-router-dom'
import {Image, CloudinaryContext} from 'cloudinary-react'
var cloudinary = require('cloudinary')

export default function InvoiceDetails ({
  _id,
  invoices,
  invoice
}) {
  const invoiceId = invoices.find((i) => i._id === _id)
  console.log(invoiceId)
  return (
    <div>
      <br />
      {/* <span>Factory Name: {henry.factoryName}</span>
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
      <hr /> */}
    </div>
  )
}
