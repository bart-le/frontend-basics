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