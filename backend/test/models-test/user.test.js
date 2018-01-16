'use strict'
/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect
const User = require('../../models/user')

describe('Person', function () {
  it('should have two names', function () {
    // make our new person
    const person = new User({ firstName: 'John', lastName: 'Brown' })

    // expect their names to match
    expect(person.lastName).to.equal('Brown')
    expect(person.firstName).to.equal('John')
  })
})
