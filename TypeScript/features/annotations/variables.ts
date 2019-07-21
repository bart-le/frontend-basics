// PRIMITIVES
let apples = 3;
let speed: string = 'fast';
let hasName: boolean = true;

// SAME VALUE NAME AS TYPE
let nothing: null = null;
let nothingYet: undefined = undefined;

// BUILT-IN OBJECTS
let now: Date = new Date();

// ARRAYS
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [4, 2, 0];
let bools: boolean[] = [true, false, true];

// CLASSES
class Car {}
let car: Car = new Car();

// OBJECT LITERALS
let point: { x: number; y: number } = {
	x: 10,
	y: 20
};

// FUNCTIONS
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// WHEN TO USE ANNOTATIONS
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// WHEN DECLARED ON ONE LINE AND INITIALIZED LATER
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// INCORRECTLY INFERRED VARIABLES
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
