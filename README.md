# Weather & Time in JS

This is a small project in JavaScript that takes an arbitrary number of location strings (cities) or numbers (zip codes) and returns the current time and weather at that location.

## Getting Started

The project uses two APIs for weather and time.
* Weather - api.openweathermap.org
* Time - api.timezonedb.com

You will need API keys for both to run the script. They should be placed in a file **utils/validation.js** with the following structure:

'''javascript
module.exports = {
  weather: YOUR_WEATHER_API_KEY,
  time: YOUR_TIME_API_KEY
}
'''

### Dependencies

* axios: ^0.19.0

## Usage

The script is run from a CLI using space-separated items. You may specify an ISO 3166 country code in the input using a comma to separate the postal code and country code (see last item in the example for Moncton, Canada).

Example: **./currentweather.js** "New York" 59718 Shanghai "Saint Petersburg" E1A,CA

### Notes

The weather API is somewhat inconsistent in how it deals with non-ASCII character city names. Some names are normalized and others are not. Try it both ways if the first fails to find results. Ambiguous cities will default to the best global fit unless country is otherwise specified, i.e. **London,US** will return the Ohio location.

## Possible improvements

* Use the OpenWeather city list to create a more robust name lookup methodology
* Migrate to a different API for better international postal code support