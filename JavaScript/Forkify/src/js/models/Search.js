import axios from 'axios';
export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		const key = '5955cd70ee82d3f5c2bb649ce4b3ec36';
		try {
			const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
			this.result = res.data.recipes;
		} catch(error) {
			alert(error);
		}
	}
}
