const KEYS = require("./validation.js")
const axios = require('axios');

module.exports = async (location, locationType) => {
  const results = await axios({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?${locationType}=${location}&appid=${KEYS.weather}`,
  })

  if (results.status!=200){
    console.error(result.status);
  } else {
    const lat = results.data.coord.lat;
    const lon = results.data.coord.lon;
    const name = results.data.name;
    const weather = results.data.weather[0].description;
    return {lat, lon, weather, name,};
  }
}
