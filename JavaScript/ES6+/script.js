// VAR, LET AND CONST
/*
// // DECLARATION
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

// // FUNCTIONAL VS. BLOCK SCOPE
function driversLicence5(passedTest) {
	if (passedTest) {
		console.log(firstName);
		var firstName = 'Bart';
		var yearOfBirth = 1995;
	}

	console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);

function driversLicence6(passedTest) {
	console.log(firstName);
	let firstName;
	const yearOfBirth = 1995;
	
	if (passedTest) {
		firstName = 'Bart';
	}
	
	console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);

var i = 23;

for (var i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i);
*/
// IIFE AND BLOCKS
/*
// // ES6
{
	const a = 1;
	let b = 2;
	var c = 3;
}
// console.log(a + b);
console.log(c);

// // ES5
(function() {
	var c = 3;
})();
// console.log(c);
*/
// STRINGS IN ES6
/*
let firstName = 'Bart';
let lastName = 'Le';
const yearOfBirth = 1995;

function calcAge(year) {
	return 2019 - year;
}

// // ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('b'));
console.log(n.endsWith('nguyen'));
console.log(n.includes('art'));
console.log(`${firstName} `.repeat(3));
*/
// ARROW FUNCTIONS
/*
const years = [1990, 1995, 1945, 1969];

// // ES5
var ages5 = years.map(function(el) {
	return 2019 - el;
});
console.log(ages5);

// // ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
*/
// ARROW FUNCTIONS LEXICAL THIS
/*
// // ES5 OBJECT FUNCTION
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		var self = this;
		document.querySelector('.green').addEventListener('click', function() {
			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
			alert(str);
		});
	}
};
// box5.clickMe();

// // ES6 OBJECT FUNCTION
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		document.querySelector('.green').addEventListener('click', () => {
			let str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
};
// box6.clickMe();

const box66 = {
	color: 'green',
	position: 1,
	clickMe: () => {
		document.querySelector('.green').addEventListener('click', () => {
			let str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
};
// box66.clickMe();

function Person(name) {
	this.name = name;
}

var friends = ['Bill', 'Steve', 'Michael'];

// // ES5 CONSTRUCTOR FUNCTION THIS
Person.prototype.myFriends5 = function(friends) {
	var arr = friends.map(function(el) {
		return this.name + ' is friends with ' + el;
	}.bind(this));
	console.log(arr);
};
new Person('Bart').myFriends5(friends);

// // ES6 CONSTRUCTOR FUNCTION THIS
Person.prototype.myFriends6 = function(friends) {
	var arr = friends.map(el => `${this.name} is friends with ${el}`);
	console.log(arr);
};
new Person('Elon').myFriends6(friends);
*/
// DESTRUCTURING
/*
// // ES5
var bart = ['Bart', 24];
var name5 = bart[0];
var age5 = bart[1];

// // ES6
const [name6, age6] = ['Bart', 24];
console.log(name6);
console.log(age6);

const obj = {
	firstName: 'Bart',
	lastName: 'Le'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// // RETURNING VALUES
function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1995);
console.log(age);
console.log(retirement);
*/
// ARRAY METHODS
/*
const boxes = document.querySelectorAll('.box');

// // CONVERTING NODELIST TO ARRAY IN ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current) {
	current.style.backgroundColor = 'dodgerblue';
});

// // CONVERTING NODELIST TO ARRAY IN ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(current => {
	current.style.backgroundColor = 'dodgerblue';
});

// // FOR LOOP IN ES5
for (var i = 0; i < boxesArr5.length; i++) {
	if (boxesArr5[i].className === 'box blue') {
		continue;
	}
	boxesArr5[i].textContent = 'Switched to blue.';
}

// // FOR OF LOOP IN ES6
for (const current of boxesArr6) {
	if (current.className.includes('blue')) {
		continue;
	}
	current.textContent = 'Switched to blue.';
}

var ages = [12, 17, 8, 21, 14, 11];

// // FINDING ARRAY ELEMENTS IN ES5
var legal = ages.map(function(cur) {
	return cur >= 18;
});
console.log(legal);
console.log(legal.indexOf(true));
console.log(ages[legal.indexOf(true)]);

// // FINDING ARRAY ELEMENTS IN ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/
// SPREAD OPERATOR
/*
function addNumbers(a, b, c, d) {
	return a + b + c + d;
}

var sum1 = addNumbers(1, 2, 4, 8);
console.log(sum1);

// // ES5
var numbers = [1, 2, 4, 8];
var sum2 = addNumbers.apply(null, numbers);
console.log(sum2);

// // ES6
const sum3 = addNumbers(...numbers);
console.log(sum3);

const dough = ['yeast', 'sugar', 'water', 'salt', 'flour', 'olive oil'];
const topping = ['tomatoes', 'oregano', 'mozzarella', 'parmesan'];
const pizza = [...dough, 'bacon', ...topping];
console.log(pizza);

const heading = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [heading, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/
// REST PARAMETER
// // ES5
/*
function isLegal5() {
	var argsArr = Array.prototype.slice.call(arguments);
	argsArr.forEach(function(cur) {
		console.log((2019 - cur) >= 18);
	});
}
isLegal5(1995, 2003, 1969);
isLegal5(1995, 2003, 1969, 1950, 2010);
// // ES6
function isLegal6(...years) {
	years.forEach(cur => console.log((2019 - cur) >= 18));
}
isLegal6(1995, 2003, 1969);

// // MULTIPLE ARGUMENTS IN ES5
function isLegalLimit5(limit) {
	var argsArr = Array.prototype.slice.call(arguments, 1);
	argsArr.forEach(function(cur) {
		console.log((2019 - cur) >= limit);
	});
}
isLegalLimit5(21, 1995, 2003, 1969);

// // MULTIPLE ARGUMENTS IN ES6
function isLegalLimit6(limit, ...years) {
	years.forEach(cur => console.log((2019 - cur) >= limit));
}
isLegalLimit6(16, 1995, 2003, 1969);
*/
// DEFAULT PARAMETERS
/*
function Person5(firstName, yearOfBirth, lastName, nationality) {
	lastName === undefined ? lastName = 'Jordan' : lastName = lastName;
	nationality === undefined ? nationality = 'American' : nationality = nationality;

	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
}
var michael = new Person5('Michael', 1963);
console.log(michael);
var kyrie = new Person5('Kyrie', 1992, 'Irving', 'Australian');
console.log(kyrie);

function Person6(firstName, yearOfBirth, lastName = 'Bond', nationality = 'British') {
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
}
var james = new Person6('James', 1968);
console.log(james);
*/
// MAPS
/*
const question = new Map();
question.set('question', 'Who\'s the current owner of Charlotte Hornets?');
question.set(1, 'Shaquille O\'Neal');
question.set(2, 'Jerry West');
question.set(3, 'Michael Jordan');
question.set(4, 'Charles Barkley');
question.set('correct', 3);
question.set(true, 'Correct!');
question.set(false, 'Wrong.');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
	// question.delete(4);
	console.log('Answer 4 is here.');
}

// question.clear();

question.forEach((value, key) => {
	console.log(`This is ${key} and it's set to ${value}`);
});

for (let [key, value] of question.entries()) {
	if (typeof(key) === 'number') {
		console.log(`Answer ${key}: ${value}`);
	}
}

const ans = parseInt(prompt('The answer is:'));
console.log(question.get(ans === question.get('correct')));
*/
// CLASSES
/*
// // ES5
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
}

var bart5 = new Person5('Bart', 1995, 'developer');

// // ES6
class Person6 {
	constructor (name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	
	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}
	
	static greeting() {
		console.log('Hello there!');
	}
}

const bart6 = new Person6('Bart', 1995, 'developer');
Person6.greeting();
*/
// SUBCLASSES
/*
// // ES5
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
	Person5.call(this, name, yearOfBirth, job);
	this.olympicGames = olympicGames;
	this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
	this.medals++;
	console.log(this.medals);
};

var michaelAthlete5 = new Athlete5('Michael', 1963, 'basketball player', 2, 4);
michaelAthlete5.calculateAge();
michaelAthlete5.wonMedal();

// // ES6
class Person6 {
	constructor (name, yearOfBirth, job) {
			this.name = name;
			this.yearOfBirth = yearOfBirth;
			this.job = job;
	};

	calculateAge() {
			var age = new Date().getFullYear() - this.yearOfBirth;
			console.log(age);
	}
};

class Athlete6 extends Person6 {
	constructor(name, yearOfBirth, job, olympicGames, medals) {
			super(name, yearOfBirth, job);
			this.olympicGames = olympicGames;
			this.medals = medals;
	};
	
	wonMedal() {
			this.medals++;
			console.log(this.medals);
	};
};

var michaelAthlete6 = new Athlete6('Michael', 1963, 'basketball player', 2, 4);
michaelAthlete6.wonMedal();
michaelAthlete6.calculateAge();
*/
// CODING CHALLENGE 8
// // Suppose that you're working in a small town administration, and you're in charge of two town elements:
// // 1. Parks
// // 2. Streets
// // It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

// // At an end-of-year meeting, your boss wants a final report with the following:
// // 1. Tree density of each park in the town (forumla: number of trees/park area).
// // 2. Average age of each town's park (forumla: sum of all ages/number of parks).
// // 3. The name of the park that has more than 1000 trees.
// // 4. Total and average length of the town's streets.
// // 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal.

// // All the report data should be printed to the console.
// // HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

class Element {
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Element {
	constructor(name, buildYear, area, numTrees) {
		super(name, buildYear);
		this.area = area;
		this.numTrees = numTrees;
	}

	treeDensity() {
		const density = this.numTrees / this.area;
		console.log(`${this.name} has a tree density of ${density}.`);
	}
}

class Street extends Element {
	constructor(name, buildYear, length, size = 3) {
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}

	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');
		
		console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)}.`);
	}
}

const allParks = [
	new Park('Tiny Park', 1987, 0.5, 123),
	new Park('Bigger Park', 1830, 3.1, 456),
	new Park('The Biggest Park', 1987, 0.5, 2137)
];

const allStreets = [
	new Street('Electric Avenue', 1983, 3, 5),
	new Street('Mean Streets', 1973, 2.1, 3),
	new Street('Sesame Street', 1969, 1.8, 2),
	new Street('Elm Street', 2010, 1.5)
];

function calc(arr) {
	const sum = arr.reduce((prev, curr) => prev + curr, 0);
	return [sum, sum / arr.length];
}

function parkReport(p) {
	console.log(`------ PARKS ------`);

	p.forEach(element => element.treeDensity());
	
	const ages = p.map(el => new Date().getFullYear() - el.buildYear);
	const [totalAge, avgAge] = calc(ages);
	console.log(`Out ${p.length} parks have an average of ${avgAge} years.`);

	const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
	console.log(`${p[i].name} has more than 1000 trees.`);
}

function streetReport(s) {
	console.log(`------ STREETS ------`);

	const [totalLength, avgLength] = calc(s.map(el => el.length));
	console.log(`Out ${s.length} streets have a total length of ${totalLength}, with an average of ${avgLength}`);

	s.forEach(el => el.classifyStreet());
}

parkReport(allParks);
streetReport(allStreets);