import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResults {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
}
let manUtdWins = 0;
for (let match of reader.data) {
	if (
		(match[1] === 'Man United' && match[5] === MatchResults.HomeWin) ||
		(match[2] === 'Man United' && match[5] === MatchResults.AwayWin)
	)
		manUtdWins++;
}

console.log(manUtdWins);
