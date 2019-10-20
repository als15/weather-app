const request = require('request')
const conf = require('./config')

const token = conf.token
const baseUrl = conf.baseUrl

const geocode = (address, callback) => {
  const url = `${baseUrl}/${encodeURIComponent(
    address
  )}.json?access_token=${token}&limit=1`

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback('Cant connect to GeoLocation service', undefined)
    } else if (res.body.features.length === 0) {
      console.log('Unable to find location', undefined)
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[0],
        longitude: res.body.features[0].center[1],
        placeName: res.body.features[0].place_name
      })
    }
  })
}

const forecast = (longitutde, latitutde, callback) => {
  const url = `https://api.darksky.net/forecast/44f8d3fb7d5fde1318feedc88816abf8/${longitutde}, ${latitutde}`

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback('Cant connect to Forecast service')
    } else if (false) {
    } else {
      callback(res)
    }
  })
}

module.exports = { geocode, forecast }
