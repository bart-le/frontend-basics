const profile = {
	name: 'Bart',
	age: 24,
	coords: {
		lat: 52,
		long: 21
	},
	setAge(age: number): void {
		this.age = age;
	}
};

const { age }: { age: number } = profile;
const {
	coords: { lat, long }
}: { coords: { lat: number; long: number } } = profile;
