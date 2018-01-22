import React from 'react'
import {Redirect} from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
import decodeJWT from 'jwt-decode'

const token = window.localStorage.getItem('token')

class ProfileForm extends React.Component {
  state = { redirect: false}

  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target

    // const decodedToken = decodeJWT(token)
    // console.log(decodedToken)
    // const email = decodedToken.email
    // console.log(email)
    // const password = elements['password'].value
    const factoryName = elements['factoryName'].value
    const address = elements['address'].value
    const hkid = elements['hkid'].value
    const stripeId = ''
    const invoices = []
    const incorporationCertificate = elements['incorporationCertificate'].value

    // props for the form, only send what you need these will be expected on the submission (ie; no stripeId)
    this.props.onSubmit({factoryName, address, hkid, stripeId, invoices, incorporationCertificate })
    // allow the redirect after submssion
    this.setState({ redirect: true })
  }

  render() {
    const { redirect } = this.state
    return (
      <div>
          {/*  if the redirect state is true goto profiles */}
        <Navigation />
        <Jumbotron className='jumbotron-blue'>
          <Logo />
        { redirect && <Redirect to="/uploadHkid" />}
        <form onSubmit={this.handleFormSubmission} >
          &nbsp;
          <label>
            Factory Name:
            &nbsp;
            <input type='text' name='factoryName' />
          </label>
          <br />

          <label>
            Address:
            &nbsp;
            <input type='text' name='address' />
          </label>
          <br />

          <label>
            HK ID:
            &nbsp;
            <input type='text' name='hkid' />
          </label>
          <br />

          <label>
            Incorporation Certificate:
            &nbsp;
            <input type='text' name='incorporationCertificate' />
          </label>
          <br />


          <button type='submit' className='btn-blue'>Create Profile</button>
        </form>
      </Jumbotron>
      </div>
    )
  }
}

export default ProfileForm
