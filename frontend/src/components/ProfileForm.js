import React from 'react'
import {Redirect} from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'

class ProfileForm extends React.Component {
  state = { redirect: false}

  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target
    // const email = elements['email'].value
    // const password = elements['password'].value
    const factoryName = elements['factoryName'].value
    const address = elements['address'].value
    const hkid = elements['hkid'].value
    const stripeId = ''
    const incorporationCertificate = elements['incorporationCertificate'].value
    const paymentMethod = elements['paymentMethod'].value

    // props for the form, only send what you need these will be expected on the submission (ie; no stripeId)
    this.props.onSubmit({ factoryName, address, hkid, stripeId, incorporationCertificate, paymentMethod })
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
        { redirect && <Redirect to="/profiles" />}
        <form onSubmit={this.handleFormSubmission} >
          &nbsp;
          {/* <label>
            Email:
            &nbsp;
            <input type='text' name='email' />
          </label>

          <label>
            Password:
            &nbsp;
            <input type='text' name='password' />
          </label> */}

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

          <label>
            Payment Method:
            &nbsp;
            <input type='text' name='paymentMethod' />
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
