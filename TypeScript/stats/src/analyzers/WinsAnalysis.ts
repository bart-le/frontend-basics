import { MatchData } from '../MatchData';
import { MatchResults } from '../MatchResults';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		let wins = 0;
		for (let match of matches) {
			if (
				(match[1] === 'Man United' && match[5] === MatchResults.HomeWin) ||
				(match[2] === 'Man United' && match[5] === MatchResults.AwayWin)
			)
				wins++;
		}

		return `${this.team} won ${wins} games.`;
	}
}
