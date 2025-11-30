ServerEvents.recipes(event => {
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
                item: "minecraft:ghast_tear"
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
                item: "minecraft:nether_star"
            }
        ],
        result: {
            id: "kubejs:nether_key"
        }
    })
})