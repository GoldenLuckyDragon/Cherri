// allow for env files
require('dotenv').config()

// set up express
const express = require('express')

// set up our url configs which change dynamically with production.
const SERVER_CONFIGS = require('./constants/server')

// add routes
const configureServer = require('./server')
const configureRoutes = require('./routes')

// run express
const app = express()

// run routes through the app.
configureServer(app)
configureRoutes(app)

// allow any access point (zeit changes per deployment)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// turn on our server
app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT)
})
