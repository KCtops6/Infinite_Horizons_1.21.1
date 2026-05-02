ServerEvents.recipes(event => {
    const ROLLER_ITEM = 'pamhc2foodcore:rolleritem';
    event.forEachRecipe({ input: ROLLER_ITEM }, recipe => {
        if (recipe.getOriginalRecipeIngredients().size() == 2) {
            let ingredientsJson = [];
            recipe.getOriginalRecipeIngredients().forEach(i => {
                if (!i.test(ROLLER_ITEM)) {
                    ingredientsJson.push(i.toJson());
                }
            });
            let resultJson = [{
                count: recipe.originalRecipeResult.count * 2,
                id: recipe.originalRecipeResult.id
            }];
            let cleanID = recipe.originalRecipeResult.id.replace(':', '_');
            event.custom({
                type: "createaddition:rolling",
                ingredients: ingredientsJson,
                results: resultJson
            }).id(`createaddition:rolling/kubejs/${cleanID}`); 
        }
    });
});