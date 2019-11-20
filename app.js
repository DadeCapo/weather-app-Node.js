const request = require('request')
const geocode = require('./utils/geocode')

//Notes weather request
// const url = 'https://api.darksky.net/forecast/3753aafb87ef39c1b693861a43914bea/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } 
    
//     else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
//     }
// })

//Notes Geocoding service. Takes address and turns into Lat and long
//address -> lat/long -> weather


// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiZGFkZWNhcG8iLCJhIjoiY2szNmRna2d1MDBraTNnbzZiMTA5b2s2NiJ9.e4qABztfyxEV3ZP_sJwJpw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to process request')
//     } else if (response.body.features.length === 0 ) {
//         console.log('Unable to find location')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })


geocode('Miami', (error, data) => {
    console.log('error', error)
    console.log('data', data)
})