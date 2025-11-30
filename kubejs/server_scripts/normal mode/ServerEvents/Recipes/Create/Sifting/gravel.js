ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.25),
        Output.of('minecraft:raw_iron', 0.25),
        Output.of('minecraft:raw_copper', 0.5),
        Output.of('create:raw_zinc', 0.125)
    ],'minecraft:gravel','kubejs:copper_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.5),
        Output.of('minecraft:raw_iron', 0.5),
        Output.of('minecraft:raw_copper', 0.75),
        Output.of('create:raw_zinc', 0.25),
        Output.of('kubejs:raw_tin', 0.25)
    ],'minecraft:gravel','kubejs:iron_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.25),
        Output.of('minecraft:raw_iron', 0.75),
        Output.of('minecraft:raw_copper', 0.5),
        Output.of('create:raw_zinc', 0.5),
        Output.of('kubejs:raw_tin', 0.5)
    ],'minecraft:gravel','createsifter:brass_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.125),
        Output.of('minecraft:raw_iron', 0.5),
        Output.of('minecraft:raw_copper', 0.25),
        Output.of('create:raw_zinc', 0.75),
        Output.of('kubejs:raw_tin', 0.75),
    ],'minecraft:gravel','kubejs:netherite_mesh')
})