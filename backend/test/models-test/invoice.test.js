'use strict'
/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect
const Invoice = require('../../models/invoice')

describe('invoice', function () {
  it('should be invalid if invoice number is empty', function (done) {
    // create a new profile that is set to fail
    var i = new Invoice()

      // expect our new profile to have
      // an error because email was not given
    i.validate(function (err) {
      expect(err.errors.invoiceNumber).to.exist
      done()
    })
  })
})
