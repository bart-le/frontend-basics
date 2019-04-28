// CALLBACK HELL
/*
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
*/
// PROMISE
/*
const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([123, 234, 345, 456]);
	}, 1500);
});

const getRecipe = recID => {
	return new Promise((resolve, reject) => {
		setTimeout(ID => {
			const recipe = {title: 'Tonkotsu Miso Ramen', publisher: 'Bart'};
			resolve(`${ID}: ${recipe.title}`);
		}, 1500, recID);
	});
};

const getRelated = publisher => {
	return new Promise ((resolve, reject) => {
		setTimeout(pub => {
			const recipe = {title: 'Takoyaki', publisher: 'Bart'};
			resolve(`${pub}: ${recipe.title}`);
		}, 1500, publisher);
	});
};

getIDs
.then(IDs => {
	console.log(IDs);
	return getRecipe(IDs[2]);
})
.then(recipe => {
	console.log(recipe);
	return getRelated('Bart');
})
.then(recipe => {
	console.log(recipe);
})
.catch(error => {
	console.log('Error!');
});
*/
// ASYNC/AWAIT
const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([123, 234, 345, 456]);
	}, 1500);
});

const getRecipe = recID => {
	return new Promise((resolve, reject) => {
		setTimeout(ID => {
			const recipe = {title: 'Tonkotsu Miso Ramen', publisher: 'Bart'};
			resolve(`${ID}: ${recipe.title}`);
		}, 1500, recID);
	});
};

const getRelated = publisher => {
	return new Promise ((resolve, reject) => {
		setTimeout(pub => {
			const recipe = {title: 'Takoyaki', publisher: 'Bart'};
			resolve(`${pub}: ${recipe.title}`);
		}, 1500, publisher);
	});
};

async function getRecipesAW() {
	const IDs = await getIDs;
	console.log(IDs);
	const recipe = await getRecipe(IDs[2]);
	console.log(recipe);
	const related = await getRelated('Bart');
	console.log(related);

	return recipe;
}
getRecipesAW().then(result => console.log(`${result} is the best!`));