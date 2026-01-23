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
});