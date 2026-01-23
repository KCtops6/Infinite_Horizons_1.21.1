ServerEvents.recipes(event => {
    const PEBBLE_TO_BLOCK_MAPPINGS = [
        { input: 'kubejs:stone_pebble', output: 'minecraft:cobblestone'},
        { input: 'kubejs:andesite_pebble', output: 'minecraft:andesite'},
        { input: 'kubejs:deepslate_pebble', output: 'minecraft:cobbled_deepslate'},
        { input: 'kubejs:diorite_pebble', output: 'minecraft:diorite'},
        { input: 'kubejs:granite_pebble', output: 'minecraft:granite'},
        { input: 'kubejs:tuff_pebble', output: 'minecraft:tuff' }
    ];
    PEBBLE_TO_BLOCK_MAPPINGS.forEach(recipe => {
        event.shapeless(recipe.output, Item.of(recipe.input, 4));
    });
    event.shapeless(Item.of('kubejs:rubber_sheet', 1), 'kubejs:raw_rubber');
    event.shapeless(Item.of('kubejs:infernal_matter', 1), [
        'create_deep_dark:sculk_flour', 'create:cinder_flour', 'minecraft:blaze_powder'
    ]).id('kubejs:infernal_matter');
});