ServerEvents.recipes(event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:sand'
            }
        ],
        result: [
            {
                item: 'createsifter:dust'
            }
        ],
        tool: {
            type: "farmersdelight:tool_action",
            action: "pickaxe_dig"
        }
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                tag: 'forge:cobblestone'
            }
        ],
        result: [
            {
                item: 'minecraft:gravel'
            }
        ],
        tool: {
            type: 'farmersdelight:tool_action',
            action: 'pickaxe_dig'
        }
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:gravel'
            }
        ],
        result: [
            {
                item: 'minecraft:sand'
            }
        ],
        tool: {
            type: "farmersdelight:tool_action",
            action: "pickaxe_dig"
        }
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:gravel'
            }
        ],
        result: [
            {
                item: 'minecraft:gravel'
            },
            {
                item: 'minecraft:flint',
                chance: 0.5
            },
            {
                item: 'minecraft:iron_nugget',
                chance: 0.25
            }
        ],
        tool: {
            type: "farmersdelight:tool_action",
            action: "shovel_dig"
        }
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'minecraft:dirt'
            }
        ],
        result: [
            {
                item: 'minecraft:dirt'
            },
            {
                item: 'twigs:pebble',
                chance: 0.75
            }
        ],
        tool: {
            type: "farmersdelight:tool_action",
            action: "shovel_dig"
        }
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'botania:dreamwood'
            }
        ],
        result: [
            {
                item: 'botania:dreamwood'
            },
            {
                item: 'botania:dreamwood_twig',
                chance: 0.75
            }
        ],
        tool: {
            type: "farmersdelight:tool_action",
            action: "axe_dig"
        }
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'botania:dreamwood_log'
            }
        ],
        result: [
            {
                item: 'botania:dreamwood_log'
            },
            {
                item: 'botania:dreamwood_twig',
                chance: 0.75
            }
        ],
        tool: {
            type: "farmersdelight:tool_action",
            action: "axe_dig"
        }
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'botania:livingwood'
            }
        ],
        result: [
            {
                item: 'botania:livingwood'
            },
            {
                item: 'botania:livingwood_twig',
                chance: 0.75
            }
        ],
        tool: {
            type: "farmersdelight:tool_action",
            action: "axe_dig"
        }
    })
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'botania:livingwood_log'
            }
        ],
        result: [
            {
                item: 'botania:livingwood_log'
            },
            {
                item: 'botania:livingwood_twig',
                chance: 0.75
            }
        ],
        tool: {
            type: "farmersdelight:tool_action",
            action: "axe_dig"
        }
    })
})