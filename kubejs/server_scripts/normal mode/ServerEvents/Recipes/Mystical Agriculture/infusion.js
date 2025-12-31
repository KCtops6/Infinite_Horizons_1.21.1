ServerEvents.recipes(event => {
    event.custom({
        type: "mysticalagriculture:infusion",
        input: {
            item: "minecraft:ominous_trial_key"
        },
        ingredients: [
            {
                item: 'minecraft:eye_armor_trim_smithing_template'
            },
            {
                item: 'minecraft:spire_armor_trim_smithing_template'
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
                item: 'minecraft:netherite_upgrade_smithing_template'
            },
            {
                item: 'minecraft:snout_armor_trim_smithing_template'
            },
            {
                item: 'minecraft:rib_armor_trim_smithing_template'
            },
            {
                item: 'mysticalagriculture:soulium_gemstone'
            },
            {
                item: 'mysticalagriculture:soulium_gemstone'
            },
            {
                item: "kubejs:nether_totem"
            },
            {
                item: "create:blaze_cake"
            },
            {
                item: "create:haunted_bell"
            }
        ],
        result: {
            id: "kubejs:nether_key"
        }
    })
})