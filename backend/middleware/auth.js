const passport = require('passport')
const JWT = require('jsonwebtoken')
const PassportJWT = require('passport-jwt')
const User = require('../models/user')

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

function register (req, res, next) {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstname,
    lsstName: req.body.lastname
  })

  User.register(user, req.body.password,
  (error, user) => {
    if (error) {
      next(error)
      return
    }
  // Store user in the req object itself so that it is accesible
  // by following middleware...
    req.user = user
    next()
  })
}

passport.use(new PassportJWT.Strategy(
  {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'topsecret',
    algorithms: [ 'HS256' ]
  },
  (payload, done) => {
    User.findById(payload.sub)
    .then((user) => {
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
    .catch((error) => {
      done(error, false)
    })
  }
))

function signJWTForUser (req, res) {
  const user = req.user
  const token = JWT.sign({
    email: user.email
  },
  'topsecret',
    {
      algorithm: 'HS256',
      // expiresIn: '7 days',
      subject: user._id.toString()
    }
  )
  res.json({ token })
}

module.exports = {
  initialize: [passport.initialize(), passport.session()],
  register,
  signJWTForUser,
  signIn: passport.authenticate('local', {session: false}),
  requireJWT: passport.authenticate('jwt', {session: false})
}
