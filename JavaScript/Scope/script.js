// HOISTING
// // FUNCTIONS
calculateAge(1995);
function calculateAge(year) {
  console.log(2019 - year);
}

var retirement = function(year) {
  console.log(65 - (2019 - year));
}
retirement(1995);

// // VARIABLES
console.log(age)
var age = 18;

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);