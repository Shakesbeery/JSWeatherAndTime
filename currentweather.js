#! /usr/bin/env node

const rq = require('request');
const yargs = require('yargs');

const inpArgs = process.argv.slice(2);
for (arg of inpArgs){
  console.log(arg);
}

//http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=xml&by=position&lat=40.689247&lng=-74.044502
//http://api.openweathermap.org/data/2.5/weather?q=CITY_NAMEs&appid=API_KEY