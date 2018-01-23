'use strict'
/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect
const User = require('../../models/user')

describe('Person', function () {
  it('should have an email', function () {
    // make our new person
    const person = new User({ email: 'John@ablondi.com' })

    // expect their names to match
    expect(person.email).to.equal('John@ablondi.com')
  })
})
