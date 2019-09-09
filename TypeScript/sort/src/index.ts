class Sorter {
	constructor(public collection: number[] | string) {}

	sort(): void {
		const { length } = this.collection;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length; j++) {
				if (this.collection instanceof Array) {
					if (this.collection[j] > this.collection[j + 1]) {
						[this.collection[j], this.collection[j + 1]] = [this.collection[j + 1], this.collection[j]];
					}
				}

				if (typeof this.collection === 'string') {
				}
			}
		}
	}
}

const sorter = new Sorter([4, 2, 0, 6, 9]);
sorter.sort();
console.log(sorter.collection);
