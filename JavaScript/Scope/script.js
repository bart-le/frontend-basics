// HOISTING
/*
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
*/
// SCOPE
/*
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    console.log(a + b + c);
  }
}

function first() {
  var b = 'Hi!';
  second();

  function second() {
      var c = 'Hey!';
      third();
  }
}

function third() {
  var d = 'John';
  // console.log(c);
  console.log(a + d);
}
*/
// THIS
var bart = {
  name: 'Bart',
  yearOfBirth: 1995,
  calculateAge: function() {
    console.log(this);
    console.log(2019 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

bart.calculateAge();

var bill = {
  name: 'Bill',
  yearOfBirth: 1955
};

bill.calculateAge = bart.calculateAge;
bill.calculateAge();