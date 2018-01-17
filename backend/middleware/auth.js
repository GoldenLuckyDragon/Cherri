// set up our consts
const passport = require('passport')
const JWT = require('jsonwebtoken')
const PassportJWT = require('passport-jwt')
const User = require('../models/user')

// strategies are for avoiding username you set up a strategy with passport.
passport.use(User.createStrategy())

// this sends the cookie to the front so we can see it in the request object
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Serialization flow
// passport.serializeUser(function(user, done) {
//    done(null, user.id);
//                 |
// });              |
//                 |
//                 |____________________> saved to session req.session.passport.user = {id:'..'}
//                                   |
//                                  \|/
// passport.deserializeUser(function(id, done) {
//                   ________________|
//                   |
//                  \|/
//    User.findById(id, function(err, user) {
//        done(err, user);
//                   |______________>user object attaches to the request as req.user
//
// });
//  });

function register (req, res, next) {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstname,
    lastName: req.body.lastname
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
  // knowing there is a user id in the payload, go check

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

// function to start using Json web tokens
function signJWTForUser (req, res) {
  const user = req.user
  const token = JWT.sign({
    email: user.email
  },
  'topsecret',
    {
      algorithm: 'HS256',
      // jsons must be a string and the id is kept as a mongo object.s
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
  // export our signin function to use passport authentication.
  signIn: passport.authenticate('local', {session: true}),
  requireJWT: passport.authenticate('jwt', {session: false})
}
