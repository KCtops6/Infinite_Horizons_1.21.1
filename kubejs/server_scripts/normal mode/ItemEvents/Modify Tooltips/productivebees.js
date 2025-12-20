const beeMap = {
    "minecraft:oak_log": [
        "productivebees:spawn_egg_green_carpenter_bee",
        "productivebees:spawn_egg_yellow_black_carpenter_bee"
    ],
    "minecraft:spruce_log": [
        "productivebees:spawn_egg_resin_bee",
        "productivebees:spawn_egg_yellow_black_carpenter_bee"
    ],
    "minecraft:dark_oak_log": [
        "productivebees:spawn_egg_green_carpenter_bee",
        "productivebees:spawn_egg_yellow_black_carpenter_bee",
        "productivebees:spawn_egg_blue_banded_bee"
    ],
    "minecraft:birch_log": [
        "productivebees:spawn_egg_green_carpenter_bee",
        "productivebees:spawn_egg_yellow_black_carpenter_bee"
    ],
    "minecraft:jungle_log": ["productivebees:spawn_egg_green_carpenter_bee"],
    "minecraft:acacia_log": [
        "productivebees:spawn_egg_blue_banded_bee",
        'productivebees:spawn_egg_neon_cuckoo_bee'
    ],
    "minecraft:cherry_log": ["productivebees:spawn_egg_blue_banded_bee"],
    "minecraft:mangrove_log": ["productivebees:spawn_egg_green_carpenter_bee"],
    "minecraft:stone": [
        "productivebees:spawn_egg_mason_bee",
        "productivebees:spawn_egg_digger_bee"
    ],
    "minecraft:coarse_dirt": [
        "productivebees:spawn_egg_leafcutter_bee",
        "productivebees:spawn_egg_chocolate_mining_bee",
        "productivebees:spawn_egg_ashy_mining_bee"
    ],
    "minecraft:sand": [
        "productivebees:spawn_egg_chocolate_mining_bee",
        "productivebees:spawn_egg_ashy_mining_bee"
    ],
    "minecraft:snow_block": ["productivebees:spawn_egg_sweat_bee"],
    "minecraft:gravel": [
        "productivebees:spawn_egg_digger_bee",
        "productivebees:spawn_egg_chocolate_mining_bee",
        "productivebees:spawn_egg_ashy_mining_bee"
    ],
    "minecraft:sugar_cane": [
        "productivebees:spawn_egg_mason_bee",
        "productivebees:spawn_egg_reed_bee"
    ],
    "minecraft:slime_block": [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:slimy"}]'
    ],
    "minecraft:glowstone": [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:glowing"}]'
    ],
    "minecraft:soul_sand": [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:ghostly"}]'
    ],
    "minecraft:quartz_block": [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:crystalline"}]'
    ],
    "minecraft:gold_block": [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:gold"}]'
    ],
    "minecraft:nether_bricks": [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:magmatic"}]'
    ],
    "minecraft:end_stone": [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:ender"}]'
    ],
    "minecraft:obsidian": [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:draconic"}]'
    ],
    'minecraft:bone_block': [
        'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:skeletal"}]'
    ]
}
const beesToBlocks = {}
for (const [block, bees] of Object.entries(beeMap)) {
    for (const bee of bees) {
        if (!beesToBlocks[bee]) beesToBlocks[bee] = []
        beesToBlocks[bee].push(block)
    }
}
function formatBlockListBold(components) {
    if (components.length === 1) return components[0]
    if (components.length === 2) return Text.join([components[0], Text.string(" or "), components[1]])
    const parts = []
    for (let i = 0; i < components.length; i++) {
        if (i > 0 && i < components.length - 1) parts.push(Text.string(", "))
        if (i === components.length - 1) parts.push(Text.string(", or "))
        parts.push(components[i])
    }
    return Text.join(parts)
}
ItemEvents.modifyTooltips(event => {
    for (const [beeID, blockIDs] of Object.entries(beesToBlocks)) {
        let boldNames = blockIDs.map(id =>
            Text.of(Item.of(id).displayName).bold()
        )
        let formatted = formatBlockListBold(boldNames);
        event.modify(beeID, { shift: true }, text => {
            text.add(
                Text.green("Obtained by right clicking a Honey Treat on ")
                    .append(formatted)
                    .append(Text.green("."))
            )
        })
        event.modify(beeID, { shift: false }, text => {
            text.add(
                Text.gray("Hold ").append(Text.gold("Shift").bold()).append(Text.gray(" for more info."))
            )
        })
    }
})
