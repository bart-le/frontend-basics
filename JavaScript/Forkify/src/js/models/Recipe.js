import axios from 'axios';
import { key } from '../config';

export default class Recipe {
	constructor(id) {
		this.id = id;
	}

	async getRecipe() {
		try {
			const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
			this.title = res.data.recipe.title;
			this.img = res.data.recipe.image_url;
			this.author = res.data.recipe.publisher;
			this.url = res.data.recipe.source_url;
			this.ingredients = res.data.recipe.ingredients;
		} catch (error) {
			console.log(error);
			alert('Something went wrong :(');
		}
	}

	calcTime() {
		const numIng = this.ingredients.length;
		const periods = Math.ceil(numIng / 3);
		this.time = periods * 15;
	}

	calcServings() {
		this.servings = 4;
	}

	parseIngredients() {
		const unitsLong = ['tablespoons', 'tablespoon', 'teaspoons', 'teaspoon', 'ounces', 'ounce', 'pounds', 'cups'];
		const unitsShort = ['tbsp', 'tbsp', 'tsp', 'tsp', 'oz', 'oz', 'lbs', 'cup'];
		const units = [...unitsShort, 'kg', 'g'];

		const newIngredients = this.ingredients.map(el => {
			// UNIFY UNITS
			let ingredient = el.toLowerCase();
			unitsLong.forEach((unit, i) => {
				ingredient = ingredient.replace(unit, units[i]);
			});
			// REMOVE PARENTHESIS
			ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
			// PARSE INGREDIENTS INTO COUNT, UNIT AND INGREDIENT
			const arrIng = ingredient.split(' ');
			const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

			let objIng;
			if (unitIndex > -1) {
				// THERE'S A UNIT
				const arrCount = arrIng.slice(0, unitIndex);
				
				let count;
				if (arrCount.length === 1) {
					count = eval(arrIng[0].replace('-', '+'));
				} else {
					count = eval(arrIng.slice(0, unitIndex).join('+'));
				}

				objIng = {
					count,
					unit: arrIng[unitIndex],
					ingredient: arrIng.slice(unitIndex + 1).join(' ')
				};
			} else if (parseInt(arrIng[0], 10)) {
				// THERE IS NO UNIT, BUT FIRST ELEMENT IS A NUMBER
				objIng = {
					count: parseInt(arrIng[0], 10),
					unit: '',
					ingredient: arrIng.slice(1).join(' ')
				};
			} else if (unitIndex === -1) {
				// THERE IS NO UNIT AND NO NUMBER IN FIRST POSITION
				objIng = {
					count: 1,
					unit: '',
					ingredient
				};
			}

			return objIng;
		});
		this.ingredients = newIngredients;
	}
}