ServerEvents.recipes(event => {
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "minecraft:totem_of_undying"
        },
        loops: 3,
        results: [
            {
                id: "kubejs:nether_totem"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_nether_totem"
                    },
                    {
                        item: "kubejs:netherite_plate"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_nether_totem"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_nether_totem"
                    },
                    {
                        item: "kubejs:gold_plate"
                    }
                ],
                results: [
                    {
                        id: "kubejs:incomplete_nether_totem"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "kubejs:incomplete_nether_totem"
                    },
                    {
                        item: "minecraft:nether_star"
                    }
                ],
                "results": [
                    {
                        id: "kubejs:incomplete_nether_totem"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "kubejs:incomplete_nether_totem"
        }
    }).id('kubejs:nether_totem')
})