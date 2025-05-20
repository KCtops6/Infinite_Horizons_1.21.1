ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_gold', 0.25),
        Output.of('minecraft:netherite_scrap', 0.025),
    ],'createsifter:crushed_netherrack','createsifter:andesite_mesh').waterlogged(true)
})