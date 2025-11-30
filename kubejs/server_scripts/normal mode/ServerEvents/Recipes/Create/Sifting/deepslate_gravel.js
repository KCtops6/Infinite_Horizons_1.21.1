ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('kubejs:raw_aluminum', 0.125),
        Output.of('kubejs:raw_lead', 0.125),
        Output.of('kubejs:raw_nickel', 0.125),
        Output.of('kubejs:raw_silver', 0.125),
        Output.of('kubejs:raw_osmium', 0.25),
        Output.of('kubejs:raw_uranium', 0.0625)
    ], 'kubejs:deepslate_gravel', 'kubejs:copper_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:diamond', 0.125),
        Output.of('kubejs:raw_aluminum', 0.25),
        Output.of('kubejs:raw_lead', 0.25),
        Output.of('kubejs:raw_nickel', 0.25),
        Output.of('kubejs:raw_silver', 0.25),
        Output.of('kubejs:raw_osmium', 0.5),
        Output.of('kubejs:raw_uranium', 0.125)
    ], 'kubejs:deepslate_gravel', 'kubejs:iron_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:diamond', 0.25),
        Output.of('minecraft:raw_gold', 0.5),
        Output.of('kubejs:raw_aluminum', 0.125),
        Output.of('kubejs:raw_lead', 0.125),
        Output.of('kubejs:raw_nickel', 0.125),
        Output.of('kubejs:raw_silver', 0.125),
        Output.of('kubejs:raw_osmium', 0.75),
        Output.of('minecraft:amethyst_shard', 0.5),
        Output.of('kubejs:raw_uranium', 0.25),
        Output.of('mysticalagriculture:prosperity_shard', 0.25)
    ], 'kubejs:deepslate_gravel', 'createsifter:brass_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:diamond', 0.75),
        Output.of('minecraft:raw_gold', 0.25),
        Output.of('kubejs:raw_aluminum', 0.0625),
        Output.of('kubejs:raw_lead', 0.0625),
        Output.of('kubejs:raw_nickel', 0.0625),
        Output.of('kubejs:raw_silver', 0.0625),
        Output.of('kubejs:raw_osmium', 0.5),
        Output.of('minecraft:amethyst_shard', 0.25),
        Output.of('mysticalagriculture:prosperity_shard', 0.75),
        Output.of('kubejs:raw_uranium', 0.75)
    ], 'kubejs:deepslate_gravel', 'kubejs:netherite_mesh')
})
