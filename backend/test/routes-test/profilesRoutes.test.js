'use strict'
/* eslint-env mocha */

// required consts because of convoluted file layout

// allow for env files
require('dotenv').config()

// set up express
const express = require('express')
const configureServer = require('../../server')

const chai = require('chai')
const expect = chai.expect
const Profile = require('../../models/profile')
const app = express()

configureServer(app)

chai.use(require('chai-http'))

describe('Profiles API', function () {
  let server
  const port = 7010

  // before each test turn on server
  before(function (done) {
    server = app.listen(port, done)
  })

  // turn off after each test
  after(function (done) {
    server.close(done)
  })

  beforeEach(function (done) {
    Profile.create({
      email: 'j@m.com',
      factoryName: 'CJ Jam Co',
      comments: [{ invoiceNumber: 'F1n4687' }]
    }, done())
  })

  // clear the data
  afterEach(function (done) {
    Profile.remove({}, done())
  })

  it('Should not be authorized', function () {
    return chai.request(app)
      .get('/profiles')
        .catch(function (res) {
          expect(res.status).to.equal(404)
        })
  })
})
