class Vehicle {
	constructor(public color: string) {}

	protected drive(): void {
		console.log('Vroom...');
	}
}

const vehicle = new Vehicle('blue');
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	makeSomeNoise(): void {
		this.drive();
		this.honk();
	}

	private honk(): void {
		console.log('Beep-beep!');
	}
}

const car = new Car(4, 'red');
car.makeSomeNoise();
