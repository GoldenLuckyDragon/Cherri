// cors allows you to talk to yourself from two differnt localports;
const cors = require('cors')
const bodyParser = require('body-parser')
const authMiddleware = require('./middleware/auth')
const passport = require('passport')

// whitelist our ports for the front end
const CORS_WHITELIST = require('./constants/frontend')

// dynamic origin (based on production vs dev env)
const corsOptions = {
  origin: (origin, callback) =>

// not 100% sure of this sentence, the non negative index confuses me.
  (CORS_WHITELIST.indexOf(origin) !== -1)
    ? callback(null, true)
    : callback(new Error('Not allowed by CORS'))
}

// let the app use cors and body parser.
const configureServer = app => {
  app.use(cors())
  app.use(authMiddleware.initialize)
  app.use(require('cookie-parser')())
  app.use(bodyParser.json())
  app.use('/movies', require('./routes/profiles'))
  app.use('/auth', require('./routes/auth'))
  app.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false }))
  app.use(passport.initialize())
  app.use(passport.session())
}

// export
module.exports = configureServer
