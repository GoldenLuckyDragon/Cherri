const path = require('path')

// dev port
const SERVER_PORT = 8080

// if in production use correct config.
const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || SERVER_PORT
}

module.exports = SERVER_CONFIGS
