ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('kubejs:stone_pebble', 1),
        Output.of('kubejs:andesite_pebble', 0.75),
        Output.of('minecraft:pumpkin_seeds', 0.2),
        Output.of('minecraft:melon_seeds', 0.2),
        Output.of('farmersdelight:wild_rice', 0.1)
    ],'minecraft:grass_block','createsifter:andesite_mesh')
})