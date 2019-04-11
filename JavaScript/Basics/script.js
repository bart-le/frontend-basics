// VARIABLES AND DATA TYPES
/*
var firstName = 'Bart';
console.log(firstName);
var lastName = 'Le';

var age = 24;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'developer';
console.log(job);
*/
// TYPE COERCION AND VARIABLE MUTATION
/*
var firstName = 'Bart';
var age = 24;

// // TYPE COERCION
console.log(firstName + age);

var job, isMarried;
job = 'developer';
isMarried = false;
console.log(firstName + ' is a ' + age + '-year-old ' + job + '. Is he married? ' + isMarried);

// // VARIABLE MUTATION
age = 'twenty four';
job = 'bartender';
alert(firstName + ' is a ' + age + '-year-old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/
// BASIC OPERATORS
/*
var now, yearBart, yearBill;
now = 2019;
ageBart = 24;
ageBill = 64;

// // MATH OPERATOR
yearBart = now - ageBart;
yearBill = now - ageBill;
console.log(yearBart);
console.log(now + 3);
console.log(now * 3);
console.log(now / 10);

// // LOGICAL OPERATOR
var bartOlder = ageBart > ageBill;
console.log(bartOlder);

// // TYPEOF OPERATOR
console.log(typeof bartOlder);
console.log(typeof ageBill);
console.log(typeof 'Bill Gates is a co-founder of Microsoft.');
var x;
console.log(typeof x);
*/
// OPERATOR PRECEDENCE
/*
var now = 2019;
var yearBart = 1995;
var fullAge = 18;

// // MULTIPLE OPERATORS
var isFullAge = now - yearBart >= fullAge;
console.log(isFullAge);

// // GROUPING
var ageBart = now - yearBart;
var ageBill = 64;
var average = (ageBart + ageBill) / 2;
console.log(average);

// // MULTIPLE ASSIGNMENTS
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// // MORE OPERATORS
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/
// CODING CHALLENGE 1
/*
// // You and Bill are trying to compare your BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
// // 1. Store your mass and height in variables.
// // 2. Calculate both your BMIs.
// // 3. Create a boolean variable containing information about whether Bill has a higher BMI than you.
// // 4. Print a string to the console containing the variable from step 3. (Something like "Is Bill's BMI higher than yours? true").

var massBart = 75;
var heightBart = 1.72;
var massBill = 70;
var heightBill = 1.77;

var BMIBart = massBart / (heightBart * heightBart);
var BMIBill = massBill / (heightBill * heightBill);
console.log(BMIBart, BMIBill);
var isBartFatter = BMIBart > BMIBill;
console.log('Is Bart fatter than Bill Gates? ' + isBartFatter);
*/
// IF/ELSE STATEMENTS
/*
var firstName = 'Bart';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will probably die alone.');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will probably die alone.');
}

var massBart = 75;
var heightBart = 1.72;
var massBill = 70;
var heightBill = 1.77;
var BMIBart = massBart / (heightBart * heightBart);
var BMIBill = massBill / (heightBill * heightBill);

if (BMIBart > BMIBill) {
  console.log('Bart is in worse shape than Bill.');
} else {
  console.log('Bill is in worse shape than Bart.');
}
*/
// BOOLEAN LOGIC
/*
var firstName = 'Bart';
var age = 24;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/
// TERNARY OPERATOR AND SWITCH STATEMENTS
var firstName = 'Bart';
var age = 24;

// // TERNARY OPERATOR
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// // SWITCH STATEMENTS
var job = 'developer';

switch (job) {
  case 'developer':
  case 'programmer':
    console.log(firstName + ' might work for Google some day.');
    break;
  case 'bartender':
    console.log(firstName + ' gets people drunk.');
    break;
  case 'unemployed':
    console.log(firstName + ' is broke.');
    break;
  default:
    console.log(firstName + ' will get a coding job soon.');
}

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}