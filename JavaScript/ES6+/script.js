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