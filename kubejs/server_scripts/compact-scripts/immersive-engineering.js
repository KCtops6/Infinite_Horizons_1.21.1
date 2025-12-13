if (Platform.isLoaded("immersiveengineering")) {
    console.log("Immersive Engineering installed...loading compact scripts.");
    ServerEvents.recipes(event => {
        event.custom({
            type: "immersiveengineering:fertilizer",
            growthModifier: 2.5,
            input: {
                item: 'mysticalagriculture:mystical_fertilizer'
            }
        });
        event.custom({
            type: "immersiveengineering:cloche",    // type of garden cloche.
            input: {
                item: 'farmersdelight:tomato_seeds'  // tomato seeds as imput.
            },
            render: {
                type: "immersiveengineering:crop",  // renders it as a growing block inside the machine...
                block: 'farmersdelight:budding_tomatoes' // ...with appearance of tomatoes.
            },
            results: [
                {
                    item: 'farmersdelight:tomato'   // output of tomato.
                },
                {
                    item: 'farmersdelight:tomato_seeds', // secondary output of tomato seeds.
                }
            ],
            soil: {
                item: 'minecraft:dirt'  // soil of farmland.
            },
            time: 600
        })
        event.custom({
            type: "immersiveengineering:cloche",    // type of garden cloche.
            input: {
                item: 'farmersdelight:cabbage_seeds'  // cabbage seeds as imput.
            },
            render: {
                type: "immersiveengineering:crop",  // renders it as a growing block inside the machine...
                block: 'farmersdelight:cabbages' // ...with appearance of cabbages.
            },
            results: [
                {
                    item: 'farmersdelight:cabbage'   // output of cabbage.
                },
                {
                    item: 'farmersdelight:cabbage_seeds', // secondary output of cabbage seeds.
                }
            ],
            soil: {
                item: 'minecraft:dirt'  // soil of farmland.
            },
            time: 600
        })
        const seeds = [
            // elemental seeds.
            { material: 'air', tier: 1},
            { material: 'earth', tier: 1},
            { material: 'water', tier: 1},
            { material: 'fire', tier: 1},
            // tier 1 seeds.
            { material: 'inferium', tier: 1},
            { material: 'stone', tier: 1},
            { material: 'dirt', tier: 1},
            { material: 'wood', tier: 1},
            { material: 'ice', tier: 1},
            { material: 'deepslate', tier: 1},
            // tier 2 seeds.
            { material: 'nature', tier: 2},
            { material: 'dye', tier: 2},
            { material: 'nether', tier: 2},
            { material: 'coal', tier: 2},
            { material: 'coral', tier: 2},
            { material: 'honey', tier: 2},
            { material: 'amethyst', tier: 2},
            { material: 'pig', tier: 2},
            { material: 'chicken', tier: 2},
            { material: 'cow', tier: 2},
            { material: 'sheep', tier: 2},
            { material: 'squid', tier: 2},
            { material: 'fish', tier: 2},
            { material: 'slime', tier: 2},
            { material: 'turtle', tier: 2},
            { material: 'armadillo', tier: 2},
            { material: 'rubber', tier: 2},
            { material: 'silicon', tier: 2},
            { material: 'sulfur', tier: 2},
            { material: 'aluminum', tier: 2},
            { material: 'saltpeter', tier: 2},
            { material: 'apatite', tier: 2},
            { material: 'limestone', tier: 2},
            // tier 3 seeds.
            { material: 'iron', tier: 3},
            { material: 'copper', tier: 3},
            { material: 'nether_quartz', tier: 3},
            { material: 'glowstone', tier: 3},
            { material: 'redstone', tier: 3},
            { material: 'obsidian', tier: 3},
            { material: 'prismarine', tier: 3},
            { material: 'zombie', tier: 3},
            { material: 'skeleton', tier: 3},
            { material: 'creeper', tier: 3},
            { material: 'spider', tier: 3},
            { material: 'rabbit', tier: 3},
            { material: 'tin', tier: 3},
            { material: 'bronze', tier: 3},
            { material: 'zinc', tier: 3},
            { material: 'brass', tier: 3},
            { material: 'silver', tier: 3},
            { material: 'lead', tier: 3},
            { material: 'graphite', tier: 3},
            { material: 'sky_stone', tier: 3},
            { material: 'certus_quartz', tier: 3},
            // tier 4 seeds.
            { material: 'gold', tier: 4},
            { material: 'lapis_lazuli', tier: 4},
            { material: 'end', tier: 4},
            { material: 'experience', tier: 4},
            { material: 'breeze', tier: 4},
            { material: 'blaze', tier: 4},
            { material: 'ghast', tier: 4},
            { material: 'enderman', tier: 4},
            { material: 'steel', tier: 4},
            { material: 'nickel', tier: 4},
            { material: 'constantan', tier: 4},
            { material: 'electrum', tier: 4},
            { material: 'invar', tier: 4},
            { material: 'uranium', tier: 4},
            { material: 'ruby', tier: 4},
            { material: 'sapphire', tier: 4},
            { material: 'peridot', tier: 4},
            { material: 'soulium', tier: 4},
            { material: 'hop_graphite', tier: 4},
            { material: 'fluix', tier: 4},
            // tier 5 seeds.
            { material: 'diamond', tier: 5},
            { material: 'emerald', tier: 5},
            { material: 'netherite', tier: 5},
            { material: 'wither_skeleton', tier: 5},
            { material: 'platinum', tier: 5},
            { material: 'iridium', tier: 5}
        ];   // define a seeds mapping to tier.
        const map = new Map();  // define a tier to essence hash map.
        map.set(1, 'inferium');  // add inferium tier.
        map.set(2, 'prudentium');    // add prudentium tier.
        map.set(3, 'tertium');   // add tertium tier.
        map.set(4, 'imperium');  // add imperium tier.
        map.set(5, 'supremium'); // add supremium tier.
        // for each seed...
        seeds.forEach(seed => {
            let t = 1200;    // for the base tier (farmland) of the seed, the grow time is 1200 ticks.
            // start at the base tier of the seed, work your way up to the max tier of mystical agriculture (5, supremium)...
            for (let i = seed.tier; i <= 5; i++) {
                // custom recipe event for garden cloche.
                event.custom({
                    type: "immersiveengineering:cloche",    // type of garden cloche.
                    input: {
                        item: `mysticalagriculture:${seed.material}_seeds`  // input seed is of whatever essence.
                    },
                    /**
                     * TODO - make the soil possibly look like the actual soil, not just farmland.
                     */
                    render: {
                        type: "immersiveengineering:crop",  // renders it as a growing block inside the machine...
                        block: `mysticalagriculture:${seed.material}_crop`  // ...to whatever messence it is.
                    },
                    results: [
                        {
                            count: i,
                            item: `mysticalagriculture:${seed.material}_essence`    // certain output of whatever essence
                        },
                        {
                            item: 'mysticalagriculture:fertilized_essence', // secondary output of ferilized essence...
                            chance: 0.2 // ...with a twenty percent chance (higher chance of this output compared to conventional farming).
                        }
                    ],
                    soil: {
                        item: `mysticalagriculture:${map.get(i)}_farmland`  // soil of whatever tier we are currently on.
                    },
                    time: t // grow time (depicted by base grow time minus iterative percentage decrease).
                }).id('kubejs:cloche/mystical_agriculture/' + seed.material + '_tier_' + i); // recipe id.
                t -= (t * 0.1);  // if there is a next tier, it will be ten percent faster.
            }
        });
        const materials = ['copper', 'electrum', 'aluminum', 'steel', 'lead'];
        materials.forEach(material => {
            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 2400,
                input: {
                    tag: `c:ingots/${material}`
                },
                mold: "immersiveengineering:mold_wire",
                result: {
                    basePredicate: {
                        tag: `c:wires/${material}`
                    },
                    count: 4
                }
            });
        });
    });
} else {
    console.log("Immersive Engineering not installed...ignoring compat scripts.");
}