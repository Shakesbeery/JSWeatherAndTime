const KEYS = require("./validation.js")
const request = require('request');

module.exports = function (location, locationType) {
  const url = `http://api.openweathermap.org/data/2.5/weather?${locationType}=${location}&appid=${KEYS.weather}`
  request(url, (error, response, body) => {
    if (error || response.statusCode!=200){
        console.error(error);
        throw "Could not connect to weather service API!"
    } else {
      const json = JSON.parse(body)
      const lat = json.coord.lat;
      const lon = json.coord.lon;
      const weather = json.weather[0].description;

      console.log({lat, lon, weather,}),
      console.log("Returning values!")
      return {lat, lon, weather};
    }
})
}
