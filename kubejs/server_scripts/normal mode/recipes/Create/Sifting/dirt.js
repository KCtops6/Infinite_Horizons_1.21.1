ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('kubejs:stone_pebble', 1),
        Output.of('kubejs:andesite_pebble', 0.75),
        Output.of('minecraft:pumpkin_seeds', 0.2),
        Output.of('minecraft:melon_seeds', 0.2),
        Output.of('farmersdelight:wild_rice', 0.1)
    ],'minecraft:dirt','createsifter:string_mesh');
    event.recipes.createsifter.sifting([
        Output.of('kubejs:stone_pebble', 1),
        Output.of('kubejs:andesite_pebble', 1),
        Output.of('kubejs:diorite_pebble', 0.75),
        Output.of('kubejs:granite_pebble', 0.75),
        Output.of('kubejs:deepslate_pebble', 0.25),
        Output.of('minecraft:pumpkin_seeds', 0.4),
        Output.of('minecraft:melon_seeds', 0.4),
        Output.of('farmersdelight:wild_rice', 0.2)
    ],'minecraft:dirt','kubejs:copper_mesh');
})