interface Reportable {
	summary(): string;
}

const chevy = {
	name: 'Chevrolet Camaro',
	year: 1969,
	broken: false,
	summary(): string {
		return `${this.name} might be a robot.`;
	}
};

const drink = {
	name: 'whisky',
	alcoholic: true,
	abv: 40,
	summary(): string {
		return `This drink has ${this.abv}% of alcohol in it.`;
	}
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(chevy);
printSummary(drink);
