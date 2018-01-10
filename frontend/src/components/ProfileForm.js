import React from 'react'

export default function ProfileForm ({onSubmit}) {
  function handleFormSubmission (event) {
    event.preventDefault()
    // the opposite, but not best practice
    // event.stopPropagation();
    const { elements } = event.target
    const email = elements['email'].value
    const password = elements['password'].value
    const factoryName = elements['factoryName'].value
    const address = elements['address'].value
    const hkid = elements['hkid'].value
    const incorporationCertificate = elements['incorporationCertificate'].value
    const paymentMethod = elements['paymentMethod'].value
    onSubmit({email, password, factoryName, address, hkid, incorporationCertificate, paymentMethod})
  }

  return (
    <form onSubmit={handleFormSubmission} >
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
  )
}
