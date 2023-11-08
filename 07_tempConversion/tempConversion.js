const convertToCelsius = function(fahrenheit) {
  let convertedFahrenheit = (fahrenheit - 32) / 1.8000
  let rounded = Math.round(convertedFahrenheit *10) / 10
  return rounded
};

const convertToFahrenheit = function(celsius) {
  let convertedCelsius = (celsius * 1.8000) + 32
  let rounded = Math.round(convertedCelsius * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
