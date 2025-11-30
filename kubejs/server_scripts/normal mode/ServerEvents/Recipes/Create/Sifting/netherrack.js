ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:crimson_roots', 0.125),
        Output.of('minecraft:warped_roots', 0.125),
        Output.of('minecraft:nether_sprouts', 0.125)
    ], 'createsifter:crushed_netherrack', "createsifter:string_mesh")
    event.recipes.createsifter.sifting([
        Output.of('minecraft:crimson_roots', 0.25),
        Output.of('minecraft:warped_roots', 0.25),
        Output.of('minecraft:nether_sprouts', 0.25),
        Output.of('minecraft:warped_fungus', 0.125),
        Output.of('minecraft:crimson_fungus', 0.125)
    ], 'createsifter:crushed_netherrack', "kubejs:copper_mesh")
    event.recipes.createsifter.sifting([
        Output.of('minecraft:crimson_roots', 0.125),
        Output.of('minecraft:warped_roots', 0.125),
        Output.of('minecraft:nether_sprouts', 0.125),
        Output.of('minecraft:warped_fungus', 0.5),
        Output.of('minecraft:crimson_fungus', 0.5),
        Output.of('minecraft:raw_gold', 0.25)
    ], 'createsifter:crushed_netherrack', "kubejs:iron_mesh")
    event.recipes.createsifter.sifting([
        Output.of('minecraft:warped_fungus', 0.25),
        Output.of('minecraft:crimson_fungus', 0.25),
        Output.of('minecraft:raw_gold', 0.75),
        Output.of('minecraft:netherite_scrap', 0.125)
    ], 'createsifter:crushed_netherrack', "createsifter:brass_mesh")
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_gold', 0.5),
        Output.of('minecraft:netherite_scrap', 0.75)
    ], 'createsifter:crushed_netherrack', "kubejs:netherite_mesh")
})
