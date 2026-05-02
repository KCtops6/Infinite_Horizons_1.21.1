ServerEvents.recipes(event => {
    event.custom({
        type: "create:crushing",
        ingredients: [{ item: 'minecraft:ender_pearl'}],
        processing_time: 125,
        results: [
            { id: 'kubejs:ender_pearl_dust' },
            { id: 'kubejs:ender_pearl_dust', chance: 0.5 }
        ]
    }).id('kubejs:crushing/ender_pearl_dust');

    const GRINDER_ITEM = 'pamhc2foodcore:grinderitem';
    event.forEachRecipe({ input: GRINDER_ITEM }, recipe => {
        if (recipe.getOriginalRecipeIngredients().size() == 2) {
            let ingredientsJson = [];
            recipe.getOriginalRecipeIngredients().forEach(i => {
                if (!i.test(GRINDER_ITEM)) {
                    ingredientsJson.push(i.toJson());
                }
            });
            let resultJson = [{
                count: recipe.originalRecipeResult.count * 3,
                id: recipe.originalRecipeResult.id
            }];
            let cleanID = recipe.originalRecipeResult.id.replace(':', '_');
            event.custom({
                type: "create:crushing",
                ingredients: ingredientsJson,
                processing_time: 125,
                results: resultJson,
            }).id(`create:crushing/kubejs/${cleanID}`);
        }
    });
});