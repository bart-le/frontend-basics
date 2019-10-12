'use strict';
var Sorter = /** @class */ (function() {
	function Sorter(collection) {
		this.collection = collection;
	}
	Sorter.prototype.sort = function() {
		var _a;
		var length = this.collection.length;
		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length; j++) {
				if (this.collection instanceof Array) {
					if (this.collection[j] > this.collection[j + 1]) {
						(_a = [this.collection[j + 1], this.collection[j]]),
							(this.collection[j] = _a[0]),
							(this.collection[j + 1] = _a[1]);
					}
				}
				if (typeof this.collection === 'string') {
				}
			}
		}
	};
	return Sorter;
})();
var sorter = new Sorter([4, 2, 0, 6, 9]);
sorter.sort();
console.log(sorter.collection);
