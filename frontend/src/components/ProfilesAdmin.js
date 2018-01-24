import React, { Component } from 'react'
import Checkout from './Checkout'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Image, CloudinaryContext} from 'cloudinary-react'
var cloudinary = require('cloudinary')

export default function InvoicesAdmin ({
  _id,
  profile,
  invoice,
  users
}) {
  console.log(users._id)
  // Display all factory profiles
  // profile.forEach((profile, index) => {
  //   profile['invoices'].forEach((invoice, index) => {
  //     // const invId = (invoice['_id'])
  //     // const invId = (invoice['_factoryName'])
  //     // console.log(invId)
  //     console.log(profile)
  //     // const currentProfile = profile.find({'_id': `${variable}`})
  //     // console.log(currentProfile.factoryName)
  //   })
  // })

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Item No.</th>
            <th>Factory Name</th>
            <th>Address</th>
            <th>Incorporation Certificate</th>
            <th>Hong Kong Identity Card</th>
          </tr>
        </thead>
        <tbody>
          {
          profile ? (
            profile.map((profile, index) => {
              const userid = users._id
              const hkidImg = `companydocs/${userid}_hkid.jpg`
              const icImg = `companydocs/${userid}_ic.jpg`
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{profile.factoryName}</td>
                  <td>{profile.address}</td>
                  <td><CloudinaryContext cloudName='cherri'>
                    <Image publicId={icImg} width='150' />
                  </CloudinaryContext>
                  </td>
                  <td><CloudinaryContext cloudName='cherri'>
                    <Image publicId={hkidImg} width='150' />
                  </CloudinaryContext></td>
                </tr>
              )
            })) : ('You have no submitted invoices available.')
          }
        </tbody>
      </Table>
    </div>
  )
}
