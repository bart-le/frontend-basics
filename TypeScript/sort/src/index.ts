import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([4, 2, 0, 6, 9]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('TypeScript');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(23);
linkedList.add(-500);
linkedList.add(31);
const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
