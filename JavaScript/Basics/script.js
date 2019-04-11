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