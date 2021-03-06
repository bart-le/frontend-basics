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
/*
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
*/
// TRUTHY/FALSY VALUES AND EQUALITY OPERATORS
/*
// // FALSY VALUES: undefined, null, NaN, 0, ''
// // TRUTHY VALUES: not falsy values
var height;
height = 23;

if (height || height === 0) {
  console.log('Variable has been defined.');
} else {
  console.log('Variable has not been defined.');
}

// // EQUALITY OPERATORS
if (height == '23') {
  console.log('The == operator does type coercion.');
}
*/
// CODING CHALLENGE 2
/*
// // Kobe and LeBron both play basketball in different teams. In the latest 3 games, Kobe's team scored 89, 120 and 103 points, while LeBron's team scored 116, 94 and 123 points.
// // 1. Calculate the average score for each team.
// // 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// // 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// // 4. EXTRA: Shaq also plays basketball, and his team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
// // 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

var scoreKobe = (89 + 120 + 103) / 3;
var scoreLeBron = (116 + 94 + 123) / 3;
var scoreShaq = (97 + 134 + 105) / 3;
console.log(scoreKobe, scoreLeBron, scoreShaq);

if (scoreKobe > scoreLeBron && scoreKobe > scoreShaq) {
  console.log('Kobe wins with ' + scoreKobe + ' points.');
} else if (scoreLeBron > scoreKobe && scoreLeBron > scoreShaq) {
  console.log('LeBron wins with ' + scoreLeBron + ' points.');
} else if (scoreShaq > scoreKobe && scoreShaq > scoreLeBron) {
  console.log('Shaq wins with ' + scoreShaq + ' points.');
} else {
  console.log('There is a draw');
}
*/
// FUNCTION STATEMENTS
/*
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageBart = calculateAge(1995);
var ageBill = calculateAge(1955);
var ageSteve = calculateAge(1950);
console.log(ageBart, ageBill, ageSteve);

function yearsBeforeRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsBeforeRetirement(1995, 'Bart');
yearsBeforeRetirement(1950, 'Steve');
yearsBeforeRetirement(1971, 'Elon');
*/
// FUNCTION EXPRESSIONS
/*
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'developer':
      return firstName + ' writes amazing code.';
    case 'bartender':
      return firstName + ' mixes delightful cocktails.';
    case 'unemployed':
      return firstName + ' will get a job soon!';
    default:
      return firstName + ' does something else.';
  }
}

console.log(whatDoYouDo('developer', 'Bart'));
console.log(whatDoYouDo('bartender', 'Jerry'));
console.log(whatDoYouDo('astronaut', 'Neil'));
*/
// ARRAYS
/*
// // INITIALIZATION
var names = ['Bart', 'Bill', 'Steve'];
var years = new Array(1995, 1955, 1950);
console.log(names[1]);
console.log(names.length);

// // DATA MUTATION
names[1] = 'Elon';
names[names.length] = 'Richard';
console.log(names);

// // DATA TYPE VARIETY
var bart = ['Bart', 'Le', 1995, 'developer', true];
bart.push('red');
bart.unshift('Mr.');
console.log(bart);

bart.pop();
bart.pop();
bart.shift();
console.log(bart);

console.log(bart.indexOf(3));

var isBartender = bart.indexOf('bartender') === -1 ? 'Bart is not a bartender.' : 'Bart is a bartender.';
console.log(isBartender);
*/
// CODING CHALLENGE 3
/*
// // Steve and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
// // To tip the waiter a fair amount, Steve created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
// // In the end, Steve would like to have 2 arrays:
// // 1. Containing all three tips (one for each bill).
// // 2. Containing all three final paid amounts (bill + tip).
// // HINT: To calculate 20% of a value, simply multiply it with 20/100 = 0.2.

var tipCalc = function (bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return tips.push(percentage * bill);
}

var bills = [124, 48, 268];
var tips = [];
tipCalc(bills[0]);
tipCalc(bills[1]);
tipCalc(bills[2]);

var total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];
console.log(tips, total);
*/
// OBJECTS AND PROPERTIES
/*
// // OBJECT LITERAL
var bart = {
  firstName: 'Bart',
  lastName: 'Le',
  birthYear: 1995,
  family: ['ma', 'pa'],
  job: 'developer',
  isMarried: false
};
console.log(bart.firstName);
console.log(bart['lastName']);
var x = 'birthYear';
console.log(bart[x]);

bart.job = 'bartender';
bart['isMarried'] = true;
console.log(bart);

// // OBJECT CONSTRUCTOR
var bill = new Object();
bill.firstName = 'Bill';
bill['lastName'] = 'Gates';
bill.birthYear = 1955;
console.log(bill);
*/
// OBJECT METHODS
/*
var bart = {
  firstName: 'Bart',
  lastName: 'Le',
  birthYear: 1995,
  family: ['ma', 'pa'],
  job: 'developer',
  isMarried: false,
  calcAge: function(birthYear) {
    this.age = 2019 - birthYear;
  }
};

bart.calcAge(1995);
console.log(bart);
*/
// CODING CHALLENGE 4
/*
// // Let's remember the first coding challenge where Bill and you compared their BMIs. Let's now implement the same functionality with objects and methods.
// // 1. For each of them, create an object with properties for their full name, mass, and height.
// // 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// // 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

var bart = {
  fullName: 'Bart Le',
  mass: 75,
  height: 1.72,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var bill = {
  fullName: 'Bill Gates',
  mass: 70,
  height: 1.77,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

if (bart.calcBMI() > bill.calcBMI()) {
  console.log(bart.fullName + ' has a BMI of ' + bart.bmi + ', which is higher.');
} else if (bill.bmi > bart.bmi) {
  console.log(bill.fullName + ' has a BMI of ' + bill.bmi + ', which is higher.');
} else {
  console.log('They have the same BMI.');
}
*/
// LOOPS AND ITERATION
/*
// FOR LOOP
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var bart = ['Bart', 'Le', 1995, 'developer', true];
for (var i = 0; i < bart.length; i++) {
  console.log(bart[i]);
}

// // WHILE LOOP
var i = 0;
while (i < bart.length) {
  console.log(bart[i]);
  i++;
}

// // CONTINUE AND BREAK STATEMENTS
var bart = ['Bart', 'Le', 1995, 'developer', true];
for (var i = 0; i < bart.length; i++) {
  if (typeof bart[i] !== 'string') continue;
  console.log(bart[i]);
}

for (var i = 0; i < bart.length; i++) {
  if (typeof bart[i] !== 'string') break;
  console.log(bart[i]);
}

// // LOOPING BACKWARDS
for (var i = bart.length - 1; i >= 0; i--) {
  console.log(bart[i]);
}
*/
// CODING CHALLENGE 5
// // Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
// // This time, Steve and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
// // Steve likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
// // Implement a tip calculator using objects and loops:
// // 1. Create an object with an array for the bill values.
// // 2. Add a method to calculate the tip.
// // 3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
// // 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
// // EXTRA AFTER FINISHING: Elon's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
// // Elon likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than Steve).
// // 5. Implement the same functionality as before, this time using Elon's tipping rules.
// // 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average).
// // 7. Calculate the average tip for each family.
// // 8. Log to the console which family paid the highest tips on average.

var steve = {
  fullName: 'Steve Wozniak',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.total = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips.push(bill * percentage);
      this.total.push(bill + bill * percentage);
    }
  }
}

var elon = {
  fullName: 'Elon Musk',
  bills: [77, 375, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.total = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill <= 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      this.tips.push(bill * percentage);
      this.total.push(bill + bill * percentage);
    }
  }
}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

steve.calcTips();
elon.calcTips();
steve.average = calcAverage(steve.tips);
elon.average = calcAverage(elon.tips);
console.log(steve, elon);

if (steve.average > elon.average) {
  console.log(steve.fullName + ' gives higher tips, with an average of $' + steve.average);
} else {
  console.log(elon.fullName + ' gives higher tips, with an average of $' + elon.average);
}