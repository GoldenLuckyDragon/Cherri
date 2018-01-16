'use strict'
/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect
const Profile = require('../../models/profile')

describe('profile', function () {
  it('should be invalid if email is empty', function (done) {
    // create a new profile that is set to fail
    var p = new Profile()

       // expect our new profile to have
       // an error because email was not given
    p.validate(function (err) {
      expect(err.errors.email).to.exist
      done()
    })
  })
})
