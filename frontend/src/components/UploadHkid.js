import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
var cloudinary = require('cloudinary')

require('dotenv').config()
// Set a constant of user if to be the user ID that was passed in from the profile/create page for the purpose of Cloudinary file naming.

export default function UploadHkid ({
  users
  }) {
  const userid = users._id
  function handleUploadClick (event) {
    window.cloudinary.openUploadWidget({ cloud_name: 'Cherri', upload_preset: 'companydocs', folder: 'companydocs', public_id: `${userid}_hkid`, tags: ['hkid'] },
      function (error, result) { console.log(error, result) })
  }
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <form>
          <a className='btn-blue' onClick={handleUploadClick} id='upload_widget_opener'>Upload Your Hong Kong Identity Card</a>
          <br />
          <a href={`/UploadIc`} className='btn-blue'>Submit</a>
        </form>
      </Jumbotron>
    </div>
  )
}
