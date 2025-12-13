ServerEvents.recipes(event => {
    const PEBBLE_TO_BLOCK_MAPPINGS = [
        { input: 'kubejs:stone_pebble', output: 'minecraft:cobblestone'},
        { input: 'kubejs:andesite_pebble', output: 'minecraft:andesite'},
        { input: 'kubejs:deepslate_pebble', output: 'minecraft:cobbled_deepslate'},
        { input: 'kubejs:diorite_pebble', output: 'minecraft:diorite'},
        { input: 'kubejs:granite_pebble', output: 'minecraft:granite'}
    ];
    PEBBLE_TO_BLOCK_MAPPINGS.forEach(recipe => {
        event.shapeless(recipe.output, Item.of(recipe.input, 4));
    });
    event.shapeless(Item.of('kubejs:rubber_sheet', 1), 'kubejs:raw_rubber');
    event.shapeless(Item.of('kubejs:infernal_matter', 1), [
        'create_deep_dark:sculk_flour', 'create:cinder_flour', 'minecraft:blaze_powder'
    ]).id('kubejs:infernal_matter');
    event.shapeless(Item.of('kubejs:piglin_forged_mechanism', 1), [
        'minecraft:snout_armor_trim_smithing_template', 
        'create:precision_mechanism',
        'minecraft:netherite_ingot'
    ]).id('kubejs:piglin_forged_mechanism');
    event.shapeless(Item.of('kubejs:ender_mechanism', 1), [
        'minecraft:eye_trim_smithing_template', 
        'create:precision_mechanism',
        'minecraft:ender_pearl'
    ]).id('kubejs:ender_mechanism');
});