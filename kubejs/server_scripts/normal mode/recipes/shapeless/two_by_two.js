ServerEvents.recipes(event => {
    const mappings = [
        { input: 'kubejs:stone_pebble', output: 'minecraft:cobblestone'},
        { input: 'kubejs:andesite_pebble', output: 'minecraft:andesite'},
        { input: 'kubejs:deepslate_pebble', output: 'minecraft:cobbled_deepslate'}
    ]
    mappings.forEach(recipe => {
        event.shapeless(recipe.output, Item.of(recipe.input, 4))
    })
})