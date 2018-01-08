const Profile = require('../models/profile')

Profile.create([
  {
    email: 'jo@hotmail.com',
    password: '12345',
    factory_name: 'Jo Ablo',
    address: '123 Fake St',
    hkid: 'N-1191938',
    incorporation_certificate: 'bbbb',
    payment_method: 'ccccc'
  }
])
