const request = require('request')

const url = 'https://api.darksky.net/forecast/3753aafb87ef39c1b693861a43914bea/37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)    
})