// PROTOTYPICAL INHERITANCE
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge = function() {
	console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Jordan';

var bart = new Person('Bart', 1995, 'developer');
var kobe = new Person('Kobe', 1978, 'athlete');
var jim = new Person('Jim', 1962, 'actor');

bart.calculateAge();
kobe.calculateAge();
jim.calculateAge();

console.log(bart.lastName);
console.log(kobe.lastName);
console.log(jim.lastName);
console.log(bart);
console.log(Person.prototype);