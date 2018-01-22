import React from 'react'
import {Redirect} from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
import decodeJWT from 'jwt-decode'
var cloudinary = require('cloudinary')
const token = window.localStorage.getItem('token')
const decodedToken = decodeJWT(token)
require('dotenv').config()
// Set a constant of profile to be the profile ID that was passed in from the profile/create page.
const userid = decodedToken.sub
export default class UploadIc extends React.Component {
  state = { redirect: false}
  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target
    const icUpload = elements['icUpload'].value
    this.props.onSubmit({icUpload})
    this.setState({ redirect: true })
  }
  handleUploadClick = (event) => {
    window.cloudinary.openUploadWidget({ cloud_name: 'Cherri', upload_preset: 'cherri', public_id: `${userid}_ic`, tags:['ic']},
      function(error, result) { console.log(error, result) });
  }
    render () {
          return (
            <div>
              <Navigation />
              <Jumbotron className='jumbotron-blue'>
                <Logo />
                  <form>
                  <a classname='btn-blue' onClick={this.handleUploadClick} id='upload_widget_opener'>Upload Your Certificate of Incorporation</a>
                  <br />
                  <a href={`/dashboard`} className='btn-blue'>Submit</a>
                  </form>
              </Jumbotron>
            </div>
    )
  }
}
