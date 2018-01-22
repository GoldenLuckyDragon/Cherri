// cors allows you to talk to yourself from two differnt localports;
const cors = require('cors')
const bodyParser = require('body-parser')
const authMiddleware = require('./middleware/auth')
const passport = require('passport')

// let the app use cors and body parser.
const configureServer = app => {
  app.use(cors())
  app.use(authMiddleware.initialize)
  app.use(require('cookie-parser')())
  app.use(bodyParser.json())
  app.use('/profile', require('./routes/profiles'))
  app.use('/auth', require('./routes/auth'))
  app.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false }))
  app.use(passport.initialize())
  app.use(passport.session())

  // allow any access point (zeit changes per deployment)
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
}

// export
module.exports = configureServer
