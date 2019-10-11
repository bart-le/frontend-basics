import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResults';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUtdWins = 0;
for (let match of reader.data) {
	if (
		(match[1] === 'Man United' && match[5] === MatchResults.HomeWin) ||
		(match[2] === 'Man United' && match[5] === MatchResults.AwayWin)
	)
		manUtdWins++;
}

console.log(manUtdWins);
