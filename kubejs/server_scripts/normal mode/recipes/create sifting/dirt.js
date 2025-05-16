ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('kubejs:stone_pebble', 1),
        Output.of('kubejs:andesite_pebble', 0.75),
        Output.of('pamhc2crops:aridgarden', 0.1),
        Output.of('pamhc2crops:frostgarden', 0.1),
        Output.of('pamhc2crops:shadedgarden', 0.1),
        Output.of('pamhc2crops:soggygarden', 0.1),
        Output.of('pamhc2crops:tropicalgarden', 0.1),
        Output.of('pamhc2crops:windygarden', 0.1),
    ],'minecraft:dirt','createsifter:andesite_mesh')
})