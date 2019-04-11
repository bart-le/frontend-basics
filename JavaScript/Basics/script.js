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