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
                item: "minecraft:nether_star"
            }
        ],
        result: {
            id: "kubejs:end_key"
        }
    })
})