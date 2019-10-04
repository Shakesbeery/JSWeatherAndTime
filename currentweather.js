#! /usr/bin/env node

const getTime = require('./utils/time.js');
const getWeather = require('./utils/weather.js');
const isPostalCode = require('./utils/postal.js');

const processLocation = async (location) =>{
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

const inpArgs = process.argv.slice(2);

if (inpArgs) {
  for (loc of inpArgs){
    processLocation(loc);
  }
} else {
    console.log("No locations provided! Please try again!")
}





//http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=xml&by=position&lat=40.689247&lng=-74.044502
//