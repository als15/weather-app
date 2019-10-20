const request = require('request')
const utils = require('./utils')

const address = process.argv[2]

utils.geocode(address, (err, res) => {
  const { longitude, latitude, placeName: place } = res

  utils.forecast(longitude, latitude, res => {
    console.log(place + ' - ' + res.body.currently.summary)
  })
})
