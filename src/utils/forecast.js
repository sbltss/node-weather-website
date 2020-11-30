const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5bce9bfb602ce5af4b06a9aa1c4d80a4&query=' + latitude + ', ' + longitude

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the forecast service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location. Please try again with specific latitude and longitude.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '% and cloudcover is about ' + body.current.cloudcover + '.')
        }
    })
}

module.exports = forecast