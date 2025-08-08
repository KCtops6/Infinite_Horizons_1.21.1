ServerEvents.recipes(event => {
    event.custom({
        type: "mysticalagriculture:infusion",
        input: {
            item: "minecraft:ominous_trial_key"
        },
        ingredients: [
            {
                item: "minecraft:gold_ingot"
            },
            {
                item: "minecraft:ghast_tear"
            },
            {
                item: "create_deep_dark:echo_block"
            },
            {
                item: "minecraft:blaze_rod"
            },
            {
                item: "minecraft:conduit"
            },
            {
                item: "minecraft:totem_of_undying"
            },
            {
                item: "minecraft:enchanted_golden_apple"
            },
            {
                item: "minecraft:nether_star"
            }
        ],
        result: {
            id: "kubejs:nether_key"
        }
    })
})