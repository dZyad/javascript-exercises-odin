const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => sum += number, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((sum, number) => sum *= number, 1);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(number) {
  return number == 0 ? 1 : number *= factorial(number - 1)
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
