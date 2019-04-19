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
/*
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
*/
// BIND, CALL AND APPLY
/*
var bart = {
	name: 'Bart',
	age: 24,
	job: 'developer',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladies and Gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'informal') {
			console.log('What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
		}
	}
};

var michael = {
	name: 'Michael',
	age: 56,
	job: 'basketball player'
};

bart.presentation('formal', 'morning');

// // CALL
bart.presentation.call(michael, 'formal', 'afternoon');

// // APPLY
// bart.presentation.apply(michael, ['formal', 'afternoon']);

// // BIND
var bartInformal = bart.presentation.bind(bart, 'informal');

bartInformal('morning');
bartInformal('night');

var michaelFormal = bart.presentation.bind(michael, 'formal');
michaelFormal('afternoon');
*/
// CODING CHALLENGE 7
// // 1. Build a function constructor called Question to describe a question. A question should include:
// // a) question itself,
// // b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.),
// // c) correct answer (I would use a number for this).
// // 2. Create a couple of questions using the constructor.
// // 3. Store them all inside an array.
// // 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (HINT: write a method for the Question objects for this task).
// // 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
// // 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (HINT: write another method for this).
// // 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (HINT: we learned a special technique to do exactly that).
// // 8. After you display the result, display the next random question, so that the game never ends (HINT: write a function for this and call it right after displaying the result).
// // 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
// // 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (HINT: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
// // 11. Display the score in the console. Use yet another method for this.

(function() {
	function Questions(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}
	
	Questions.prototype.displayQuestion = function() {
		console.log(this.question);
	
		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i]);
		}
	}
	
	Questions.prototype.checkAnswer = function(ans, callback) {
		var sc;

		if (ans === this.correct) {
			console.log('Correct!');
			sc = callback(true);
		} else {
			console.log('Wrong.');
			sc = callback(false);
		}

		this.displayScore(sc);
	}
	
	Questions.prototype.displayScore = function(score) {
		console.log('Current score: ' + score);
		console.log('---------');
	}

	var q1 = new Questions('Does he look like a bitch?', ['Yeah.', 'No.', 'What?'], 2);
	var q2 = new Questions('Do I feel lucky? Well, do ya, punk?', ['Hey! I gots to know!', 'Nope.', 'Kinda.'], 0);
	var q3 = new Questions('Mrs. Robinson, you\'re trying to seduce me! Aren\'t you?', ['I beg your pardon?', 'Well, no.', 'Oh yes, I am.'], 1);
	
	var questions = [q1, q2, q3];
	
	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) {
				sc++;
			}
			return sc;
		}
	}
	var keepScore = score();

	function nextQuestion() {
		var n = Math.floor(Math.random() * questions.length);
		questions[n].displayQuestion();
		
		var answer = prompt('The answer is:');
		
		if (answer !== 'exit') {
			questions[n].checkAnswer(parseInt(answer), keepScore);
			nextQuestion();
		}
	}
	nextQuestion();
})();