var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

function fahrenheitToCelsius(temp) {
  return ((temp-32)*5)/9
}
function celsiusToFahrenheit(temp) {
  return ((temp*9)/5)+32
}

var userTemp = prompt("Enter temperature:")
alert(celsiusToFahrenheit(userTemp))



// function getBMI(height,weight) {
//   var heightInt = parseFloat(height)
//   var weightInt = parseInt(weight)
//   alert("Your BMI: " + weightInt / Math.pow(heightInt,2))
// }
//
// var userWeight = prompt("What is your weight?")
// var userHeight = prompt("What is your height?")
//
// getBMI(userHeight,userWeight)

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));

alert(multiply(number1, number2));
