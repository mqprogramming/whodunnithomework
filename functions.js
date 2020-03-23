/* Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array. */

function sumNumbers(array) {
  var total = 0;
  for (number of array) {
    total += number;
  };
  return total;
};

numbersArray = [1, 2, 5, 9, 3];

console.log(sumNumbers(numbersArray));

// Define an anonymous function expression that takes two arguments:
// - an object, for example, { name: 'Wojtek', age: 30 }
// - a string, for exmaple, 'name'

// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

var keyChecker = function(object, keyToCheck) {
  var keyList = Object.keys(object);
  for( key of keyList) {
    if (key === keyToCheck) {
      return true;
    }
  }
  return false;
};

var movie = {
  title: "Titanic",
  runtime: "Too long"
};

console.log(keyChecker(movie, 'runtime'));

// Arrow functions

var multiplyNumbers = (num1, num2) => num1 * num2;

console.log(`Multiply: ${multiplyNumbers(2, 8)}`);