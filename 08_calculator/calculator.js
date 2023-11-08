const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  let num = 0
  array.forEach((item) => {
    num = num + item
  })
  return num
};

const multiply = function(array) {
  let num = 1
  array.forEach((item) => {
    num = num * item
  })
  return num
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  if (num === 0) return 1;
  let numFactorial = 1;
  for (let i = num; i > 0; i--) {
    numFactorial *= i;
  }
  return numFactorial;
	//6 * 5 * 4 * 3 * 2 * 1
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
