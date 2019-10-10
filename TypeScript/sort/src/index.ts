import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([4, 2, 0, 6, 9]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
