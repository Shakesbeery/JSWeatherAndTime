const KEYS = require("./validation.js")
const axios = require('axios');

module.exports = async (lon, lat) => {
  const results = await axios({
    method: 'get',
    url: `http://api.timezonedb.com/v2.1/get-time-zone?key=${KEYS.time}&format=json&by=position&lat=${lat}&lng=${lon}`,
  })

  if (results.status!=200){
    console.error(result.status);
  } else {
    const abbr = results.data.nextAbbreviation;
    const time = results.data.formatted;
    return {abbr, time,};
  }
}
