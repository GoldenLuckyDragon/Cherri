import React from 'react'
import {Redirect} from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import Logo from '../components/Logo'
import Navigation from '../components/navbar'
import decodeJWT from 'jwt-decode'
import connectStripe from '../images/connectStripe.png'
// Our Stripe imports
import { STRIPE_URL   } from '../constants/stripe'
import ChargesPage from '../pages/ChargesPage'

const token = window.localStorage.getItem('token')

class ProfileForm extends React.Component {
  state = { redirect: false}

  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target
    const factoryName = elements['factoryName'].value
    const address = elements['address'].value
    const stripeId = 'EMPTY'
    const invoices = []

    // props for the form, only send what you need these will be expected on the submission (ie; no stripeId)
    this.props.onSubmit({factoryName, stripeId, invoices})

    // allow the redirect after submssion
    this.setState({ redirect: true })
  }

  render() {
    const { redirect } = this.state;
    const { currentEmail } = this.props;
    let stripeUrlWithEmail = STRIPE_URL + `&user_email=${currentEmail}`;
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
            Registered Address:
            &nbsp;
            <input type='text' name='address' />
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
