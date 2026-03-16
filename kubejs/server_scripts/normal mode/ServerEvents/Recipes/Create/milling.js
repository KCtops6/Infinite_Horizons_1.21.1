//ignored: false
const stones = [
    'tuff', 'deepslate', 'diorite', 'granite', 'andesite'
];
ServerEvents.recipes(event => {
    stones.forEach(s => {
        event.custom({
            type: "create:milling",
            ingredients: [
                {
                    item: `minecraft:${s}`
                }
            ],
            processing_time: 250,
            results: [
                {
                    id: `kubejs:${s}_gravel`
                }
            ]
        }).id(`kubejs:milling/${s}_to_${s}_gravel`);
    });
    global.dusts.forEach(dust => {
        let type = null;
        let vanillaMaterials = ['iron', 'copper', 'gold', 'netherite'];
        if (global.ingots.includes(dust) || vanillaMaterials.includes(dust)) {
            type = 'ingots';
        } else if (global.gems.includes(dust)) {
            type = 'gems';
        }
        if (type !== null) {
            event.custom({
                type: "create:milling",
                ingredients: [{ tag: `c:${type}/${dust}` }],
                processing_time: 250,
                results: [{ id: `kubejs:${dust}_dust` }]
            }).id(`kubejs:milling/${dust}_to_dust`);
        }
    });
    if (Platform.isLoaded('refinedstorage')) {
        event.custom({
            type: "create:milling",
            ingredients: [
                {
                    item: 'minecraft:quartz'
                }
            ],
            processing_time: 250,
            results: [
                {
                    id: `kubejs:nether_quartz_dust`
                }
            ]
        }).id('kubejs:milling/nether_quartz_dust');
        event.custom({
            type: "create:milling",
            ingredients: [
                {
                    item: 'refinedstorage:quartz_enriched_copper'
                }
            ],
            processing_time: 250,
            results: [
                {
                    id: `kubejs:quartz_enriched_copper_dust`
                }
            ]
        }).id('kubejs:milling/quartz_enriched_copper_dust');
        event.custom({
            type: "create:milling",
            ingredients: [
                {
                    item: 'refinedstorage:quartz_enriched_iron'
                }
            ],
            processing_time: 250,
            results: [
                {
                    id: `kubejs:quartz_enriched_iron_dust`
                }
            ]
        }).id('kubejs:milling/quartz_enriched_iron_dust');
    }

    const GRINDER_ITEM = 'pamhc2foodcore:grinderitem';
    event.forEachRecipe({ input: GRINDER_ITEM }, recipe => {
        let ingredientsJson = [];
        recipe.getOriginalRecipeIngredients().forEach(i => {
            if (!i.test(GRINDER_ITEM)) {
                ingredientsJson.push(i.toJson());
            }
        });
        let resultJson = [{
            count: recipe.originalRecipeResult.count * 2,
            id: recipe.originalRecipeResult.id
        }];
        let cleanID = recipe.originalRecipeResult.id.replace(':', '_');
        event.custom({
            type: "create:milling",
            ingredients: ingredientsJson,
            processing_time: 250,
            results: resultJson,
        }).id(`create:milling/kubejs/${cleanID}`);
    });
});