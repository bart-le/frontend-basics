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