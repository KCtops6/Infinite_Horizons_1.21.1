let storage_sizes = [ '1', '4', '16', '64', '256' ];  // each storage size.
let materials = ['chainmail', 'iron', 'diamond'];
let pieces = ['helmet', 'chestplate', 'leggings', 'boots']
let other_bio_fuels = [ 'createaddition:biomass', 'mekanism:bio_fuel']
let animals = ['chicken', 'cow', 'pig', 'sheep', 'horse', 'rabbit']
let types = ['stone', 'andesite', 'deepslate', 'diorite', 'granite']
let tiers = ['copper', 'iron', 'gold', 'diamond', 'netherite']
let iron_upgrades = ['basic', 'copper']
let gold_upgrades = ['basic', 'copper', 'iron']
let diamond_upgrades = ['basic', 'copper', 'iron', 'gold']
let netherite_upgrades = ['basic', 'copper', 'iron', 'gold', 'diamond']
let upgrades = [
    'pickup', 'advanced_pickup', 'filter', 'advanced_filter', 'magnet', 'advanced_magnet', 'feeding', 'advanced_feeding',
    'compacting', 'advanced_compacting', 'void', 'advanced_void', 'restock', 'advanced_restock', 'deposit', 'advanced_deposit',
    'refill', 'advanced_refill', 'smelting', 'auto_smelting', 'blasting', 'auto_blasting', 'smoking', 'auto_smoking',
    'crafting', 'stonecutter', 'stack_downgrade_tier_1', 'stack_downgrade_tier_2', 'stack_downgrade_tier_3',
    'jukebox', 'advanced_jukebox', 'pump', 'advanced_pump', 'xp_pump'
]
ServerEvents.tags('item', event => {
    storage_sizes.forEach(s => {    // for each storage size...
        event.add('kubejs:item_storage_cells', `ae2:item_storage_cell_${s}k`)  // add that size item storage cell to the new item storage cell tag.
        event.add('kubejs:fluid_storage_cells', `ae2:fluid_storage_cell_${s}k`)    // add that size fluid storage cell to the new fluid storage cell tag.  
        event.add('kubejs:crafting_storages', `ae2:${s}k_crafting_storage`)    // add that size crafting storage to the new crafting storage tag.
    })
    materials.forEach(m => {
        pieces.forEach(p => {
            event.add(`c:armors/${m}`, `minecraft:${m}_${p}`)
        })
    })
    event.add('c:fuels/bio', 'kubejs:bio_matter');
    other_bio_fuels.forEach(fuel => {
        event.remove('c:fuels/bio', fuel)
    })
    event.removeAll('forge:dusts/endstone')    // Removing the endstone tag.
    event.add('c:dusts/end_stone', [    // to the 'forge:dusts/end_stone' tag we add...
        'gtceu:endstone_dust',  // ...gregtech endstone dust (formerly from 'forge:dusts/endstone')...
        'kubejs:end_stone_dust' // ...and the custom end stone dust.
    ])
    event.add(`c:dusts/ender_pearl`, `kubejs:ender_pearl_dust`)    // adding custom ender pearl dust to 'forge:dusts/ender_pearl' tag.
    animals.forEach(a => {
        event.add('infinitehorizons:feeds', `kubejs:${a}_feed`)
    })
    global.blocks.forEach(block => {
        event.add(`c:storage_blocks/${block}`, `kubejs:${block}_block`)
    })
    global.raw_ores.forEach(r => {
        event.add(`c:raw_materials/${r}`, `kubejs:raw_${r}`)
    })
    global.plates.forEach(plate => {
        event.add(`c:plates/${plate}`, `kubejs:${plate}_plate`)
    })
    global.nuggets.forEach(nugget => {
        event.add(`c:nuggets/${nugget}`, `kubejs:${nugget}_nugget`)
    })
    global.ingots.forEach(ingot => {
        event.add(`c:ingots/${ingot}`, `kubejs:${ingot}_ingot`)
    })
    global.gems.forEach(gem => {
        event.add(`c:gems/${gem}`, `kubejs:${gem}_gem`)
    })
    global.gears.forEach(gears => {
        event.add(`c:gears/${gears}`, `kubejs:${gears}_gear`)
    })
    global.dusts.forEach(dust => {
        event.add(`c:dusts/${dust}`, `kubejs:${dust}_dust`)
    })
    global.blocks.forEach(block => {
        event.add(`c:storage_blocks/${block}`, `kubejs:${block}_block`)
    })
    global.raw_ore_blocks.forEach(b => {
        event.add(`c:storage_blocks/raw_${b}`, `kubejs:block_of_raw_${b}`)
    })
    event.remove('c:coal_coke', 'immersiveengineering:coal_coke');
    event.add('c:coal_coke', 'kubejs:coal_coke')
    types.forEach(type => {
        event.add(`infinitehorizons:pebbles`, `kubejs:${type}_pebble`);
    })
    event.add(`c:dusts/wood`, `kubejs:sawdust`)
    tiers.forEach(t => {
        event.add(`sophisticatedstorage:${t}_storages`, `sophisticatedstorage:${t}_barrel`)
        event.add(`sophisticatedstorage:${t}_storages`, `sophisticatedstorage:${t}_chest`)
    })
    iron_upgrades.forEach(u => {
        event.add(`sophisticatedstorage:iron_upgrades`, `sophisticatedstorage:${u}_to_iron_tier_upgrade`)
    })
    gold_upgrades.forEach(u => {
        event.add(`sophisticatedstorage:gold_upgrades`, `sophisticatedstorage:${u}_to_gold_tier_upgrade`)
    })
    diamond_upgrades.forEach(u => {
        event.add(`sophisticatedstorage:diamond_upgrades`, `sophisticatedstorage:${u}_to_diamond_tier_upgrade`)
    })
    netherite_upgrades.forEach(u => {
        event.add(`sophisticatedstorage:netherite_upgrades`, `sophisticatedstorage:${u}_to_netherite_tier_upgrade`)
    })
    upgrades.forEach(u => {
        event.add(`sophisticated:${u}_upgrades`, [`sophisticatedbackpacks:${u}_upgrade`, `sophisticatedstorage:${u}_upgrade`])
    })
    event.add('c:ingots/andesite_alloy', 'create:andesite_alloy');
    event.add('c:ingots/andesite_alloy', 'kubejs:stone_alloy');
})