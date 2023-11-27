export default {
	clearForm() {
		resetWidget('addRecipeForm');
	},
	getIngredients(ingredientsList) {
		return ingredientsList.join();
	}
}