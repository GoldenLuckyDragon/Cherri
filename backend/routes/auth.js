const express = require('express')
const authMiddleware = require('../middleware/auth.js')

const router = express.Router()

// if successfully registered (post req), then return the User object
router.post('/register',
  authMiddleware.register,
  authMiddleware.signJWTForUser
  // (req, res) => {
  //   res.json({ user: req.user })
  // }
)

// Sign in a User. // middleware that allows us to sign in
router.post('/signin',
  authMiddleware.signIn,
  authMiddleware.signJWTForUser,
  // (req, res) => {
  //   res.json({ user: req.user })
  // }
)

router.get('/profiles',
  authMiddleware.signIn,
  (req, res) => {
    res.send({profiles: [ 'profile' ]})
  }
)

router.get('/charges',
  authMiddleware.requireJWT,
  (req, res) => {
    console.log(req)
  }
)

module.exports = router
