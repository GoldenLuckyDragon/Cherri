import React from 'react'

export default function ProfileEditForm ({onSubmit}) {
  function handleFormSubmission (event) {
    event.preventDefault()
    const { elements } = event.target
    const factoryName = elements['factoryName'].value
    const address = elements['address'].value
    const hkid = elements['hkid'].value
    const incorporationCertificate = elements['incorporationCertificate'].value
    const paymentMethod = elements['paymentMethod'].value
    onSubmit({factoryName, address, hkid, incorporationCertificate, paymentMethod})
  }

  return (
    <form onSubmit={handleFormSubmission} >
        &nbsp;
      <label>
        Factory Name:
        &nbsp;
        <input placeholder='' type='text' name='factoryName' />
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

      <button type='submit'>Edit Profile</button>
    </form>
  )
}
