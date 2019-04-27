// CALLBACK HELL
function getRecipe() {
	setTimeout(() => {
		const recipeID = [123, 234, 345, 456];
		console.log(recipeID);

		setTimeout(id => {
			const recipe = {title: 'Tonkotsu Miso Ramen', publisher: 'Bart'};
			console.log(`${id}: ${recipe.title}`);

			setTimeout(publisher => {
				const recipe2 = {title: 'Takoyaki', publisher: 'Bart'};
				console.log(recipe2);
			}, 1500, recipe.publisher);
		}, 1500, recipeID[2]);
	}, 1500);
}
getRecipe();