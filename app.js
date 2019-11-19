const request = require('request')

const url = 'https://api.darksky.net/forecast/3753aafb87ef39c1b693861a43914bea/37.8267,-122.4233?lang=es'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})