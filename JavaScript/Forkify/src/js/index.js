import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from "./views/base";

// GLOBAL STATE OF THE APP
// SEARCH OBJECT
// CURRENT RECIPE OBJECT
// SHOPPING LIST OBJECT
// LIKED RECIPES

const state = {};

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
		recipeView.clearRecipe();
		renderLoader(elements.recipe);
		// HIGHLIGHT SELECTED SEARCH ITEM
		if (state.search) searchView.highlightSelected(id);
		// CREATE NEW RECIPE OBJECT
		state.recipe = new Recipe(id);

		try {
			// GET RECIPE DATA
			await state.recipe.getRecipe();
			state.recipe.parseIngredients();
			// CALCULATE SERVINGS AND TIME
			state.recipe.calcTime();
			state.recipe.calcServings();
			// RENDER RECIPE
			clearLoader();
			recipeView.renderRecipe(
				state.recipe,
				state.likes.isLiked(id)
			);
		} catch (err) {
			alert('Error processing recipe :/');
		}
	}
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/* LIST CONTROLLER */
const controlList = () => {
	// CREATE A NEW LIST IF THERE IS NONE YET
	if (!state.list) state.list = new List();
	// ADD EACH INGREDIENT TO THE LIST
	state.recipe.ingredients.forEach(el => {
		const item = state.list.addItem(el.count, el.unit, el.ingredient);
		listView.renderItem(item);
	});
};

// HANDLE UPDATE AND DELETION OF LIST ITEM EVENTS
elements.shopping.addEventListener('click', e => {
	const id = e.target.closest('.shopping__item').dataset.itemid;
	// HANDLE THE DELETE BUTTON
	if (e.target.matches('.shopping__delete, .shopping__delete *')) {
		// DELETE FROM STATE
		state.list.deleteItem(id);
		// DELETE FROM UI
		listView.deleteItem(id);
	// HANDLE THE COUNT UPDATE
	} else if (e.target.matches('.shopping__count-value')) {
		const val = parseFloat(e.target.value, 10);
		state.list.updateCount(id, val);
	}
});

state.likes = new Likes();
likesView.toggleLikeMenu(state.likes.getNumLikes());
/* LIKE CONTROLLER */
const controlLike = () => {
	if (!state.likes) state.likes = new Likes();
	const currentID = state.recipe.id;

	// USER HAS NOT YET LIKED CURRENT RECIPE
	if (!state.likes.isLiked(currentID)) {
		// ADD LIKE TO STATE
		const newLike = state.likes.addLike(
			currentID,
			state.recipe.title,
			state.recipe.author,
			state.recipe.img
		);
		// TOGGLE LIKE BUTTON
		likesView.toggleLikeBtn(true);
		// ADD LIKE TO UI LIST
		likesView.renderLike(newLike);
		// USER HAS LIKED CURRENT RECIPE
	} else {
		// REMOVE LIKE FROM STATE
		state.likes.deleteLike(currentID);
		// TOGGLE LIKE BUTTON
		likesView.toggleLikeBtn(false);
		// REMOVE LIKE FROM UI LIST
		likesView.deleteLike(currentID);
	}
	likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// HANDLING RECIPE BUTTON CLICKS
elements.recipe.addEventListener('click', e => {
	if (e.target.matches('.btn-decrease, .btn-decrease *')) {
		// DECREASE BUTTON IS CLICKED
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}
	} else if (e.target.matches('.btn-increase, .btn-increase *')) {
		// INCREASE BUTTON IS CLICKED
		state.recipe.updateServings('inc');
		recipeView.updateServingsIngredients(state.recipe);
	} else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
		// ADD INGREDIENTS TO SHOPPING LIST
		controlList();
	} else if (e.target.matches('.recipe__love, .recipe__love *')) {
		// LIKE CONTROLLER
		controlLike();
	}
});