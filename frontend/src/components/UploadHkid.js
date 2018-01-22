import React from 'react'
import {Redirect} from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
// import decodeJWT from 'jwt-decode'
var cloudinary = require('cloudinary')
// const token = window.localStorage.getItem('token')
// const decodedToken = decodeJWT(token)
// const userid = decodedToken.sub

require('dotenv').config()
// Set a constant of profile to be the profile ID that was passed in from the profile/create page.
// console.log(token)
export default class UploadHkid extends React.Component {
  state = {
    redirect: false
  }

  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target
    const hkidUpload = elements['hkidUpload'].value
    this.props.onSubmit({hkidUpload})
    this.setState({ redirect: true })
  }
  handleUploadClick = (event) => {
    window.cloudinary.openUploadWidget({ cloud_name: 'Cherri', folder: 'companydocs', upload_preset: 'cherri', public_id: `${userid}_hkid`, tags:['hkid']},
    function(error, result) { console.log(error, result) });
  }

    render (profiles) {
      console.log(profiles)
          return (
            <div>
              <Navigation />
              <Jumbotron className='jumbotron-blue'>
                <Logo />
                  <form>
                  <a classname='btn-blue' onClick={this.handleUploadClick} id='upload_widget_opener'>Upload Your Hong Kong Identity Card</a>
                  <br />
                  <a href={`/UploadIc`} className='btn-blue'>Submit</a>
                  </form>
              </Jumbotron>
            </div>
    )
  }
}
