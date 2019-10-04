const KEYS = require("./validation.js")
const request = require('request');

module.exports = function (lon, lat) {
  const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${KEYS.time}&format=json&by=position&lat=${lat}&lng=${lon}`
  request(url, (error, response, body) => {
    if (error || response.statusCode!=200){
        console.error(error);
        throw "Could not connect to weather service API!"
    } else {
      console.log(body);

    }
})
}
