let meshes = [
    { material: 'copper', durability: 128 },
    { material: 'iron', durability: 256 },
    { material: 'gold', durability: 64 },
    { material: 'steel', durability: 1024 },
    { material: 'netherite', durability: 2048 },
]
StartupEvents.registry('item', event => {
    const items = [
        'stone_pebble', 'andesite_pebble', 'deepslate_pebble', 'diorite_pebble', 'granite_pebble',
        'chicken_feed', 'cow_feed', 'pig_feed', 'sheep_feed', 'rabbit_feed', 'horse_feed',
        'nether_totem', 'incomplete_nether_totem', 'infernal_matter'
    ]
    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
    items.forEach(id => {
        event.create(id).displayName(formatName(id))
    })
    const glowing_items = [ 'nether_key', 'end_key' ]
    glowing_items.forEach(id => {
        event.create(id).displayName(formatName(id)).glow(true)
    })
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
    global.dusts.forEach(dust => {
        event.create(`${dust}_dust`).displayName(`${capitalize(dust)} Dust`)
    })
    event.create('ender_pearl_dust').displayName('Ender Pearl Dust')
    event.create('end_stone_dust').displayName('End Stone Dust')
    event.create('sawdust').displayName("Sawdust")
    global.ingots.forEach(ingot => {
        event.create(`${ingot}_ingot`).displayName(`${capitalize(ingot)} Ingot`)
    })
    global.plates.forEach(plate => {
        event.create(`${plate}_plate`).displayName(`${capitalize(plate)} Plate`)
    })
    event.create('silicon').displayName('Silicon')
    global.gems.forEach(gem => {
        event.create(`${gem}_gem`).displayName(`${gem}`)
    })
    global.gears.forEach(gear => {
        event.create(`${gear}_gear`).displayName(`${capitalize(gear)} Gear`)
    })
    global.nuggets.forEach(nugget => {
        event.create(`${nugget}_nugget`).displayName(`${capitalize(nugget)} Nugget`)
    })
    global.raw_ores.forEach(r => {
        event.create(`raw_${r}`).displayName(`Raw ${capitalize(r)}`)
    })
    event.create('coal_coke').displayName('Coal Coke')
    event.create('tree_sap')
        .burnTime(800)
        .tooltip('Drop from birch or jungle wood.')
        .displayName('Tree Sap')
    event.create('raw_rubber')
        .tooltip('Obtained by processing tree sap in a furnace or smoker.')
        .displayName('Raw Rubber')
    event.create('rubber_sheet')
        .tooltip('Obtained by pressing raw rubber.')
        .displayName('Rubber Sheet')
    event.create('wooden_trowel', 'shovel').tier('wood')
    event.create('stone_trowel', 'shovel').tier('stone')
    event.create('iron_trowel', 'shovel').tier('iron')
    event.create('stone_hammer', 'pickaxe').tier('stone')
    event.create('iron_hammer', 'pickaxe').tier('iron')
    meshes.forEach(mesh => {
        event.create(`${mesh.material}_mesh`, 'createsifter:mesh')
            .displayName(`${mesh.material.charAt(0).toUpperCase() + mesh.material.slice(1)} Mesh`)
            .parentModel("createsifter:block/meshes/mesh")
            .texture("mesh", `kubejs:item/${mesh.material}_mesh`)
            .maxDamage(mesh.durability)
    })
    event.create('blazing_mechanism').displayName('Blazing Mechanism').maxStackSize(1).rarity('epic');
    event.create('piglin_forged_mechanism').displayName('Piglin-Forged Mechanism').maxStackSize(1).rarity('epic');
    event.create('ender_mechanism').displayName('Ender Mechanism').maxStackSize(1).rarity('epic');
    event.create('trial_core').displayName('Trial Core').maxStackSize(16).rarity('uncommon');
    event.create('netherite_bars').displayName('Netherite Bars');
})
