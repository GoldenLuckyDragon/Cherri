var api = require('fixer-io-node')

// The function returns the latest currency exchange rates with EURO as its base currency

api.latest('latest').then(function (result) {
  console.log(result)
}).catch(function (error) {
  console.log(error)
})

// The function returns the latest currency rates passing USD as its base currency. Other currencies like GBP, AUD, EUR, BGN etc can be used

api.base('USD').then(function (result) {
  console.log(result)
}).catch(function (error) {
  console.log(error)
})

// Returns specific exchange rates

api.specificRate('USD', 'GBP').then(function (result) {
  console.log(result)
}).catch(function (error) {
  console.log(error)
})
