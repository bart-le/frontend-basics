import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([4, 2, 0, 6, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('TypeScript');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(23);
linkedList.add(-500);
linkedList.add(31);
linkedList.sort();
linkedList.print();
