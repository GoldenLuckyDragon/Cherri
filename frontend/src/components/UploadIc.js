import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
var cloudinary = require('cloudinary')
require('dotenv').config()

// Set a constant of user if to be the user ID that was passed in from the profile/create page for the purpose of Cloudinary file naming.

export default function UploadIc ({
  users
  }) {
  const userid = users._id
  function handleUploadClick (event) {
    window.cloudinary.openUploadWidget({cloud_name: 'Cherri', upload_preset: 'companydocs', folder: 'companydocs', public_id: `${userid}_ic`, tags: ['ic']},
    function (error, result) { console.log(error, result) })
  }
  return (
    <div>
      <Navigation />
      <Jumbotron className='jumbotron-blue'>
        <Logo />
        <form>
          <a className='btn-blue' onClick={handleUploadClick} id='upload_widget_opener'>Upload Your Incorporation Certificate</a>
          <br />
          <a href={`/Dashboard`} className='btn-blue'>Submit</a>
        </form>
      </Jumbotron>
    </div>
  )
}
