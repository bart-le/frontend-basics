import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResults';

const reader = new MatchReader('football.csv');
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
