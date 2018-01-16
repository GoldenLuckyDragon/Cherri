import React from 'react'
import {Redirect} from 'react-router-dom'

class ProfileForm extends React.Component {
  state = { redirect: false}

  handleFormSubmission = (event) => {
    event.preventDefault()
    const { elements } = event.target
    const email = elements['email'].value
    const password = elements['password'].value
    const factoryName = elements['factoryName'].value
    const address = elements['address'].value
    const hkid = elements['hkid'].value
    const stripeId = ''
    const incorporationCertificate = elements['incorporationCertificate'].value
    const paymentMethod = elements['paymentMethod'].value
    this.props.onSubmit({email, password, factoryName, address, hkid, stripeId, incorporationCertificate, paymentMethod})
    this.setState({ redirect: true })
  }

  render() {
    const {redirect} = this.state
    return (
      <div>
        { redirect && <Redirect to="/profiles" />}
        <form onSubmit={this.handleFormSubmission} >
          &nbsp;
          <label>
            Email:
            &nbsp;
            <input type='text' name='email' />
          </label>

          <label>
            Password:
            &nbsp;
            <input type='text' name='password' />
          </label>

          <label>
            Factory Name:
            &nbsp;
            <input type='text' name='factoryName' />
          </label>

          <label>
            Address:
            &nbsp;
            <input type='text' name='address' />
          </label>

          <label>
            HK ID:
            &nbsp;
            <input type='text' name='hkid' />
          </label>

          <label>
            Incorporation Certificate:
            &nbsp;
            <input type='text' name='incorporationCertificate' />
          </label>

          <label>
            Payment Method:
            &nbsp;
            <input type='text' name='paymentMethod' />
          </label>

          <button type='submit'>Create Profile</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm
