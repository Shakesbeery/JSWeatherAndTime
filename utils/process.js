const getTime = require('./time.js');
const getWeather = require('./weather.js');
const isPostalCode = require('./postal.js');

module.exports = async (location) => {
  let idType = 'q';
  let {
    country,
    isMatch,
  } = isPostalCode(location);

  if (isMatch){
    idType = "zip";
    location = `${location},${country}`
  } 

  const weatherData = await getWeather(location, idType).catch(error => console.error(error));
  if (!weatherData) {
    console.log(`Unable to retrieve information about ${location}! Try a city name instead.`)
    return;
    
  } 
  const {
    lat,
    lon,
    weather,
    name
  } = weatherData;

  const timeData = await getTime(lon, lat).catch(error => console.error(error));
  if (!timeData) {
    console.log(`Unable to retrieve information about ${location}! Check you spelling or try a city name instead.`)
    return;
    
  } 
  const {
    abbr,
    time
  } = timeData;
  console.log(`The weather in ${name} is ${weather} at ${time} ${abbr?abbr:""}\n`)
}