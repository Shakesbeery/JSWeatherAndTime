#! /usr/bin/env node
const processLocation = require('./utils/process.js');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitLoop (inpArgs) {
  if (inpArgs.length) {
    for (loc of inpArgs){
      await processLocation(loc);
      await sleep(1000);
    }
  } else {
    console.log("No locations provided! Please try again!");
  }
}

const inpArgs = process.argv.slice(2);
waitLoop(inpArgs);
