# Weather & Time in JS

The specifics of this project are such:
* Given an array of inputs consisting of one of {location name, postal code}, log the current time and weather for each.
* Be consistent in code and naming conventions
* Use reactive/functional paradigm (async?)
* Good code abstraction
* Testing
* Git commiting

## The Problem Space

* There will be an input sequence. Sequence might be empty... Sequence might have imaginary places?
* Each object in the sequence will need to be checked if it's a postal code (global) or a location (city). 
* Weather will need to be retrieved from somewhere. Probably an API to a free weather service.
* Time will need to be calculated based on timezone.
* Make a pretty output string to log. 