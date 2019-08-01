const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 30
};

// TYPE ALIAS
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 40];
const tea: Drink = ['clear', false, 0];
const whisky: Drink = ['clear', false, 20];

const careerStats: [number, number] = [30.1, 32292];
const michaelJordan = {
	ppg: 30.1,
	total: 32292
};
