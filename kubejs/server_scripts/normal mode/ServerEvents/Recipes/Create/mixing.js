ServerEvents.recipes(event => {
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
                tag: "infinitehorizons:pebbles"
            }
        ],
        results: [
            {
                amount: 250,
                id: "minecraft:lava"
            }
        ]
    });
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:redstone"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "minecraft:water"
            }
        ],
        results: [
            {
                amount: 250,
                id: "immersiveengineering:redstone_acid"
            }
        ]
    });
    if (Platform.isLoaded('refinedstorage')) {
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'kubejs:iron_dust'
                },
                {
                    item: 'kubejs:iron_dust'
                },
                {
                    item: 'kubejs:iron_dust'
                },
                {
                    item: 'kubejs:iron_dust'
                },
                {
                    item: 'kubejs:iron_dust'
                },
                {
                    item: 'kubejs:nether_quartz_dust'
                },
                {
                    item: 'kubejs:nether_quartz_dust'
                },
                {
                    item: 'kubejs:nether_quartz_dust'
                },
                {
                    item: 'kubejs:nether_quartz_dust'
                }
            ],
            results: [
                {
                    count: 9,
                    id: 'kubejs:quartz_enriched_iron_dust'
                }
            ]
        });
        event.custom({
            type: "create:mixing",
            ingredients: [
                {
                    item: 'kubejs:copper_dust'
                },
                {
                    item: 'kubejs:copper_dust'
                },
                {
                    item: 'kubejs:copper_dust'
                },
                {
                    item: 'kubejs:copper_dust'
                },
                {
                    item: 'kubejs:copper_dust'
                },
                {
                    item: 'kubejs:nether_quartz_dust'
                },
                {
                    item: 'kubejs:nether_quartz_dust'
                },
                {
                    item: 'kubejs:nether_quartz_dust'
                },
                {
                    item: 'kubejs:nether_quartz_dust'
                }
            ],
            results: [
                {
                    count: 9,
                    id: 'kubejs:quartz_enriched_copper_dust'
                }
            ]
        });
    }
    event.custom({
        type: "create:milling",
        ingredients: [{ item: 'minecraft:ender_pearl'}],
        processing_time: 125,
        results: [{ id: 'kubejs:ender_pearl_dust' }]
    }).id('kubejs:milling/ender_pearl_dust');
});