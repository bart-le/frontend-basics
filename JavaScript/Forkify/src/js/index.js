import Search from './models/Search';

// GLOBAL STATE OF THE APP
// SEARCH OBJECT
// CURRENT RECIPE OBJECT
// SHOPPING LIST OBJECT
// LIKED RECIPES

const state = {
};

const controlSearch = async() => {
	// GET QUERY FROM VIEW
	const query = 'ramen';

	if (query) {
		// NEW SEARCH OBJECT AND ADD TO STATE
		state.search = new Search(query);
		// PREPARE UI FOR RESULTS
		// SEARCH FOR RECIPES
		await state.search.getResults();
		// RENDER RESULTS ON UI
		console.log(state.search.result)
	}
}

document.querySelector('.search').addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});