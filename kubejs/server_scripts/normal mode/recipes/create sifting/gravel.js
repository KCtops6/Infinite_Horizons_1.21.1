ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_iron', 0.25),
        Output.of('minecraft:raw_copper', 0.3),
        Output.of('minecraft:raw_gold', 0.15),
        Output.of('create:raw_zinc', 0.2),
    ],'minecraft:gravel','createsifter:andesite_mesh')
})