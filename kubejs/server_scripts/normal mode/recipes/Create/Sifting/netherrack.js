ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:crimson_roots', 0.1),
        Output.of('minecraft:warped_roots', 0.1),
        Output.of('minecraft:nether_sprouts', 0.1)
    ],'createsifter:crushed_netherrack',"createsifter:string_mesh")
    event.recipes.createsifter.sifting([
        Output.of('minecraft:crimson_roots', 0.2),
        Output.of('minecraft:warped_roots', 0.2),
        Output.of('minecraft:nether_sprouts', 0.2),
        Output.of('minecraft:warped_fungus', 0.1),
        Output.of('minecraft:crimson_fungus', 0.1)
    ],'createsifter:crushed_netherrack',"kubejs:copper_mesh")
    event.recipes.createsifter.sifting([
        Output.of('minecraft:crimson_roots', 0.1),
        Output.of('minecraft:warped_roots', 0.1),
        Output.of('minecraft:nether_sprouts', 0.1),
        Output.of('minecraft:warped_fungus', 0.2),
        Output.of('minecraft:crimson_fungus', 0.2),
        Output.of('minecraft:raw_gold', 0.15)
    ],'createsifter:crushed_netherrack',"kubejs:iron_mesh")
    event.recipes.createsifter.sifting([
        Output.of('minecraft:warped_fungus', 0.1),
        Output.of('minecraft:crimson_fungus', 0.1),
        Output.of('minecraft:raw_gold', 0.3),
        Output.of('minecraft:netherite_scrap', 0.05)
    ],'createsifter:crushed_netherrack',"createsifter:brass_mesh")
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_gold', 0.6),
        Output.of('minecraft:netherite_scrap', 0.15)
    ],'createsifter:crushed_netherrack',"kubejs:netherite_mesh")
})

