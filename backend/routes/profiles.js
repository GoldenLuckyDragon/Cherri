const Profile = require('../models/profile.js')
const Invoice = require('../models/invoice.js')

const profileApi = app => {
  app.get('/profile', (req, res) => {
    Profile.find({})
    .populate('invoices')
    // line above isn't populating properly issue to be fixed
    .then(profiles => {
      console.log(`profiles: `, profiles)
      res.json(profiles)
    })
    .catch(error => res.json({ error }))
  })

  app.post('/profile', (req, res) => {
    Profile.create(req.body).then((profile) => {
      res.status(201).json(profile).end()
    })
  })

  // app.patch('/profile', (req, res) => {
  //   Profile.edit(req.body).then((profile) => {
  //     res.status(201).json(profile).end()
  //   })
  // })

  // app.patch('/user/:id', function (req, res) {
  //   var updateObject = req.body // {last_name : "smith", age: 44}
  //   var id = req.params.id
  //   db.users.update({_id: ObjectId(id)}, {$set: updateObject})
  // })

  return app
}

// router.post('/', (req, res) => {
//   Movie.create({title: "Stranger Than Fiction", yearReleased: 2006, star: "Will Ferrel"}).then(movies => {
//     res.json({ movies });
//   });
// });

module.exports = profileApi
