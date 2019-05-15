import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from "./views/base";

// GLOBAL STATE OF THE APP
// SEARCH OBJECT
// CURRENT RECIPE OBJECT
// SHOPPING LIST OBJECT
// LIKED RECIPES

const state = {
};

const controlSearch = async() => {
	// GET QUERY FROM VIEW
	const query = searchView.getInput();

	if (query) {
		// NEW SEARCH OBJECT AND ADD TO STATE
		state.search = new Search(query);
		// PREPARE UI FOR RESULTS
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);
		// SEARCH FOR RECIPES
		await state.search.getResults();
		// RENDER RESULTS ON UI
		clearLoader();
		searchView.renderResults(state.search.result);
	}
};

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});