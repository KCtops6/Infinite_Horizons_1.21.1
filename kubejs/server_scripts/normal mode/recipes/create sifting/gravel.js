ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_iron', 0.25),
        Output.of('minecraft:raw_copper', 0.3),
        Output.of('minecraft:raw_gold', 0.15),
        Output.of('create:raw_zinc', 0.2),
        Output.of('kubejs:raw_tin', 0.25),
        Output.of('kubejs:raw_lead', 0.1),
        Output.of('kubejs:raw_silver', 0.1),
        Output.of('kubejs:raw_nickel', 0.15),
        Output.of('kubejs:raw_osmium', 0.1),
        Output.of('kubejs:raw_uranium', 0.05)
    ],'minecraft:gravel','createsifter:andesite_mesh')
})