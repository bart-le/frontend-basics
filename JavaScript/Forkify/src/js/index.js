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

		try {
			// SEARCH FOR RECIPES
			await state.search.getResults();
			// RENDER RESULTS ON UI
			clearLoader();
			searchView.renderResults(state.search.result);
		} catch (err) {
			alert('Something wrong with the search...');
			clearLoader();
		}
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
const controlRecipe = async () => {
	// GET ID FROM URL
	const id = window.location.hash.replace('#', '');
	console.log(id);

	if (id) {
		// PREPARE UI FOR CHANGES
		// CREATE NEW RECIPE OBJECT
		state.recipe = new Recipe(id);

		try {
			// GET RECIPE DATA
			await state.recipe.getRecipe();
			// CALCULATE SERVINGS AND TIME
			state.recipe.calcTime();
			state.recipe.calcServings();
			// RENDER RECIPE
			console.log(state.recipe);
		} catch (err) {
			alert('Error processing recipe :/');
		}
	}
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));