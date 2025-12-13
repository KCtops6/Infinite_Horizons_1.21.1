ServerEvents.recipes(event => {
    event.custom({
        type: "mysticalagriculture:infusion",
        input: {
            item: "minecraft:ominous_trial_key"
        },
        ingredients: [
            {
                item: "minecraft:obsidian"
            },
            {
                item: "minecraft:chorus_fruit"
            },
            {
                item: "minecraft:ghast_tear"
            },
            {
                item: "minecraft:blaze_rod"
            },
            {
                item: "minecraft:wither_skeleton_skull"
            },
            {
                item: "mysticalagriculture:soulium_gemstone"
            },
            {
                item: "minecraft:enchanted_golden_apple"
            },
            {
                item: "kubejs:ender_mechanism"
            }
        ],
        result: {
            id: "kubejs:end_key"
        }
    })
    event.custom({
        type: "mysticalagriculture:infusion",
        input: {
            item: "minecraft:ominous_trial_key"
        },
        ingredients: [
            {
                item: "kubejs:infernal_matter"
            },
            {
                item: "kubejs:blazing_mechanism"
            },
            {
                item: "create:haunted_bell"
            },
            {
                item: "create:blaze_cake"
            },
            {
                item: "farmersdelight:nether_salad"
            },
            {
                item: "kubejs:nether_totem"
            },
            {
                item: "minecraft:enchanted_golden_apple"
            },
            {
                item: "kubejs:piglin_forged_mechanism"
            }
        ],
        result: {
            id: "kubejs:nether_key"
        }
    })
})