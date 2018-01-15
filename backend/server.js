// cors allows you to talk to yourself from two differnt localports;
const cors = require('cors')
const bodyParser = require('body-parser')

// whitelist our ports for the front end
const CORS_WHITELIST = require('./constants/frontend')

// dynamic origin (based on production vs dev env)
const corsOptions = {
  origin: (origin, callback) => {
  // If the index is negative it implys that the array is empty.
    (CORS_WHITELIST.indexOf(origin) !== -1)
    ? callback(null, true)
    : callback(new Error('Not allowed by CORS'))
  }
}

// let the app use cors and body parser.
const configureServer = app => {
  app.use(cors())

  app.use(bodyParser.json())
}

// export
module.exports = configureServer
