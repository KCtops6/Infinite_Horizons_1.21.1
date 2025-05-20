ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:kelp', 0.2),
        Output.of('minecraft:seagrass', 0.4),
        Output.of('minecraft:sugar_cane', 0.15),
        Output.of('minecraft:nautilus_shell', 0.01),
    ],'minecraft:sand','createsifter:andesite_mesh').waterlogged(true)
})