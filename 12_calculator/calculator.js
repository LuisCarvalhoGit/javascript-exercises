const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum += current, 0)
};

const multiply = function(arr) {
  return arr.reduce((multi, current) => multi *= current, 1)
};

const power = function(n1, n2) {
	return n1 ** n2
};

const factorial = function(num) {
  if(num === 0) return 1
	return num * factorial(num - 1)
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
