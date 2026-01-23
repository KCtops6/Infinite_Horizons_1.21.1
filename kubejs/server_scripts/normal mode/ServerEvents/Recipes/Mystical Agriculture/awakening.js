ServerEvents.recipes(event => {
    event.custom({
        type: "mysticalagriculture:awakening",
        transfer_components: true,
        essences: [
            {
                id: "mysticalagriculture:wither_skeleton_essence",
                count: 40
            },
            {
                id: "mysticalagriculture:blaze_essence",
                count: 40
            },
            {
                id: "mysticalagriculture:ghast_essence",
                count: 40
            },
            {
                id: "mysticalagriculture:nether_essence",
                count: 40
            }
        ],
        input: {
            item: "minecraft:ominous_trial_key"
        },
        "ingredients": [
            {
                "item": 'minecraft:snout_armor_trim_smithing_template'
            },
            {
                "item": 'minecraft:rib_armor_trim_smithing_template'
            },
            {
                "item": 'minecraft:totem_of_undying'
            },
            {
                "item": 'minecraft:conduit'
            }
        ],
        result: {
            id: "kubejs:nether_key"
        }
    });
    event.custom({
        type: "mysticalagriculture:awakening",
        transfer_components: true,
        essences: [
            {
                id: "mysticalagriculture:enderman_essence",
                count: 40
            },
            {
                id: "mysticalagriculture:end_essence",
                count: 40
            },
            {
                id: "mysticalagriculture:sculk_essence",
                count: 40
            },
            {
                id: "mysticalagriculture:nether_star_essence",
                count: 40
            }
        ],
        input: {
            item: "minecraft:ominous_trial_key"
        },
        "ingredients": [
            {
                "item": 'minecraft:eye_armor_trim_smithing_template'
            },
            {
                "item": 'minecraft:spire_armor_trim_smithing_template'
            },
            {
                "item": 'minecraft:echo_shard'
            },
            {
                "item": 'minecraft:nether_star'
            }
        ],
        result: {
            id: "kubejs:end_key"
        }
    });
});