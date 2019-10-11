import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResults';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUtdWins = 0;
for (let match of matchReader.matches) {
	if (
		(match[1] === 'Man United' && match[5] === MatchResults.HomeWin) ||
		(match[2] === 'Man United' && match[5] === MatchResults.AwayWin)
	)
		manUtdWins++;
}

console.log(manUtdWins);
