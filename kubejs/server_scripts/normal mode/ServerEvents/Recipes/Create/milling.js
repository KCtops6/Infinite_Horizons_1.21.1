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
    if (global.pams_grinding_recipes) {
        Object.entries(global.pams_grinding_recipes).forEach(([input, output]) => {
            event.custom({
                type: "create:milling",
                ingredients: [{ item: input }],
                processing_time: 250,
                results: [{ id: output, count: 2 }]
            }).id(`kubejs:milling/${output.split(':')[1]}_from_${input.split(':')[1]}`);
        });
    }
    if (global.pams_grinding_recipes_tag_input) {
        Object.entries(global.pams_grinding_recipes_tag_input).forEach(([input, output]) => {
            let count = output.includes('raw') ? 2 : 1; 
            event.custom({
                type: "create:milling",
                ingredients: [{ tag: input }],
                processing_time: 250,
                results: [{ id: output, count: count * 2}]
            }).id(`kubejs:milling/${output.split(':')[1]}_from_tag_${input.replace(':', '_')}`);
        });
    }
});