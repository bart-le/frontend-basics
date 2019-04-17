// PROTOTYPICAL INHERITANCE
/*
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
*/
// OBJECT.CREATE
/*
var personProto = {
	calculateAge: function() {
		console.log(2019 - this.yearOfBirth);
	}
};

var bart = Object.create(personProto);
bart.name = 'Bart';
bart.yearOfBirth = 1995;
bart.job = 'developer';

var kobe = Object.create(personProto, {
	name: { value: 'Kobe' },
	yearOfBirth: { value: 1978 },
	job: { value: 'athlete' }
});
*/
// PRIMITIVES VS. OBJECTS
/*
// // PRIMITIVES
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// // OBJECTS
var obj1 = {
	name: 'Bart',
	age: 23
};
var obj2 = obj1;
obj1.age = 24;
console.log(obj1.age);
console.log(obj2.age);

// // FUNCTIONS
var age = 56;
var obj = {
	name: 'Michael',
	city: 'Chicago'
};

function change(a, b) {
	a = 30;
	b.city = 'Washington';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/
// PASSING FUNCTIONS AS ARGUMENTS
/*
var years = [1995, 1964, 1963, 1950, 2003];

function arrCalc(arr, fn) {
	var results = [];
	for (i = 0; i < arr.length; i++) {
		results.push(fn(arr[i]));
	}
	return results;
}

function calculateAge(el) {
	return 2019 - el;
}

function legalAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
	return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

var ages = arrCalc(years, calculateAge);
var legal = arrCalc(ages, legalAge);
var rates = arrCalc(ages, maxHeartRate);
console.log(ages);
console.log(legal);
console.log(rates);
*/
// FUNCTIONS RETURNING FUNCTIONS
/*
function interviewQuestions(job) {
	if (job === 'stormtrooper') {
		return function(name) {
			console.log(name + ', aren\'t you a little short for a stormtrooper?');
		}
	} else if (job === 'taxi driver') {
		return function(name) {
			console.log(name + ', you talkin\' to me?');
		}
	} else {
		return function(name) {
			console.log(name + '? Why do you keep calling me ' + name + '?');
		}
	}
}

var stormtrooperQuestion = interviewQuestions('stormtrooper');
var taxiQuestion = interviewQuestions('taxi driver');
stormtrooperQuestion('Luke');
taxiQuestion('Travis');
interviewQuestions('developer')('Bart');
*/
// IMMEDIATELY INVOKED FUNCTION EXPRESSION
/*
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();

(function(goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);
*/
// CLOSURES
function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2019 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementPoland = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1995);
retirementUS(1995);
retirementIceland(1995);