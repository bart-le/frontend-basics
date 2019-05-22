import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from "./views/base";

// GLOBAL STATE OF THE APP
// SEARCH OBJECT
// CURRENT RECIPE OBJECT
// SHOPPING LIST OBJECT
// LIKED RECIPES

const state = {
};

/* SEARCH CONTROLLER */
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

elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});

/* RECIPE CONTROLLER */
const r = new Recipe(48287);
r.getRecipe();
console.log(r);