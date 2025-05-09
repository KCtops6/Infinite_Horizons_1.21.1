ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('kubejs:stone_pebble', 1),
        Output.of('kubejs:andesite_pebble', 0.75),
        Output.of('minecraft:kelp', 0.2),
        Output.of('minecraft:seagrass', 0.4),
        Output.of('minecraft:nautilus_shell', 0.01),
    ],'minecraft:dirt','createsifter:andesite_mesh').waterlogged(true)
})