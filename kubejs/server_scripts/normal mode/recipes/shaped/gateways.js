ServerEvents.recipes(event => {
    const mappings = [{
            b: 'mysticalagriculture:nether_essence',
            c: 'mysticalagriculture:skeleton_essence',
            d: 'mysticalagriculture:coal_essence',
            mob: 'wither_skeleton'
        }, {
            b: 'mysticalagriculture:nether_essence',
            c: 'mysticalagriculture:fire_essence',
            d: 'mysticalagriculture:earth_essence',
            mob: 'blaze'
        }, {
            b: 'mysticalagriculture:nether_essence',
            c: 'mysticalagriculture:fire_essence',
            d: 'mysticalagriculture:air_essence',
            mob: 'ghast'
        }, {
            b: 'mysticalagriculture:nether_essence',
            c: 'mysticalagriculture:slime_essence',
            d: 'mysticalagriculture:blaze_essence',
            mob: 'magma_cube'
        }, {
            b: 'mysticalagriculture:earth_essence',
            c: 'mysticalagriculture:zombie_essence',
            d: 'mysticalagriculture:fire_essence',
            mob: 'husk'
        }, {
            b: 'mysticalagriculture:earth_essence',
            c: 'mysticalagriculture:spider_essence',
            d: 'mysticalagriculture:stone_essence',
            mob: 'cave_spider'
        }, {
            b: 'mysticalagriculture:water_essence',
            c: 'mysticalagriculture:zombie_essence',
            d: 'mysticalagriculture:copper_essence',
            mob: 'drowned'
        }, {
            b: 'mysticalagriculture:supremium_essence',
            c: 'mysticalagriculture:emerald_essence',
            d: 'mysticalagriculture:earth_essence',
            mob: 'evoker'
        }, {
            b: 'mysticalagriculture:water_essence',
            c: 'mysticalagriculture:prismarine_essence',
            d: 'mysticalagriculture:gold_essence',
            mob: 'guardian'
        }, {
            b: 'mysticalagriculture:nether_essence',
            c: 'mysticalagriculture:pig_essence',
            d: 'mysticalagriculture:cow_essence',
            mob: 'hoglin'
        }, {
            b: 'mysticalagriculture:nether_essence',
            c: 'mysticalagriculture:zombie_essence',
            d: 'mysticalagriculture:gold_essence',
            mob: 'piglin'
        }, {
            b: 'mysticalagriculture:earth_essence',
            c: 'mysticalagriculture:emerald_essence',
            d: 'mysticalagriculture:wood_essence',
            mob: 'pillager'
        }, {
            b: 'mysticalagriculture:earth_essence',
            c: 'mysticalagriculture:water_essence',
            d: 'mysticalagriculture:air_essence',
            mob: 'slime'
        }, {
            b: 'mysticalagriculture:earth_essence',
            c: 'mysticalagriculture:ice_essence',
            d: 'mysticalagriculture:skeleton_essence',
            mob: 'stray'
        }, {
            b: 'mysticalagriculture:earth_essence',
            c: 'mysticalagriculture:redstone_essence',
            d: 'mysticalagriculture:glowstone_essence',
            mob: 'witch'
        }
    ]

    mappings.forEach(m => {
        event.shaped(
            `gateways:gate_pearl[gateways:gateway="infinite_horizons_2_gateways:basic/${m.mob}"]`,
            [
                'CBD',
                'BAB',
                'DBC'
            ],
            {
                A: 'mysticalagriculture:soulium_gemstone',
                B: m.b,
                C: m.c,
                D: m.d
            }
        )
    })
})