class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

// EXAMPLE OF GENERICS WITH FUNCTIONS
function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

printAnything<string>(['a', 'b', 'c']);

// GENERIC CONSTRAINTS
class Car {
	print() {
		console.log('Transformers, robots in disguise.');
	}
}

class House {
	print() {
		console.log('Everybody lies.');
	}
}

interface Printable {
	print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
