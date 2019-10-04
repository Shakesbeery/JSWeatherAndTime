#! /usr/bin/env node

const yargs = require('yargs');
const getTime = require('./utils/time.js');
const getWeather = require('./utils/weather.js');
const isPostalCode = require('./utils/postal.js');

const inpArgs = process.argv.slice(2);

for (location of inpArgs){
  let idType = 'q';
  if (isPostalCode(location)){
    idType = "zip"
  } 
  const weatherData = getWeather(location, idType);
  console.log(weatherData, 'I got evaluated... This is why async is important!');
  /*const {
    lat,
    lon,
    weather
  } = weatherData;
*/
  //timeData = getTime(lon, lat);
}





//http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=xml&by=position&lat=40.689247&lng=-74.044502
//