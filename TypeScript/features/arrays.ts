const carMakers = ['Toyota', 'BMW', 'Subaru'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const car = carMakers[0];
const myCar = carMakers.pop();

// PREVENT INCOMPATIBLE VALUES
carMakers.push(420);

// HELP WITH 'MAP'
carMakers.map((car: string) => {
	return car.toLocaleUpperCase();
});

// FLEXIBLE TYPES
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('1995-04-17');
importantDates.push(new Date());
