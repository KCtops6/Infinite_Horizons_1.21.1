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
        if (global.ingots.includes(dust)) {
            event.custom({
                type: "create:milling",
                ingredients: [
                    {
                        tag: `c:ingots/${dust}`
                    }
                ],
                processing_time: 250,
                results: [
                    {
                        id: `kubejs:${dust}_dust`
                    }
                ]
            }).id(`kubejs:milling/${dust}_ingot_to_${dust}_dust`);
        } else if (global.gems.includes(dust)) {
            event.custom({
                type: "create:milling",
                ingredients: [
                    {
                        tag: `c:gems/${dust}`
                    }
                ],
                processing_time: 250,
                results: [
                    {
                        id: `kubejs:${dust}_dust`
                    }
                ]
            }).id(`kubejs:milling/${dust}_gem_to_${dust}_dust`);
        }
    })
});