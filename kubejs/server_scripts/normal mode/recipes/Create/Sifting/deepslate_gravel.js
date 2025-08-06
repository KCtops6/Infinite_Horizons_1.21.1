ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('kubejs:raw_aluminum', 0.025),
        Output.of('kubejs:raw_lead', 0.05),
        Output.of('kubejs:raw_nickel', 0.05),
        Output.of('kubejs:raw_osmium', 0.1),
        Output.of('kubejs:raw_silver', 0.05),
        Output.of('kubejs:raw_uranium', 0.0125)
    ],'kubejs:deepslate_gravel','kubejs:copper_mesh')
    event.recipes.createsifter.sifting([
        Output.of('kubejs:raw_aluminum', 0.025 * 1.5),
        Output.of('kubejs:raw_lead', 0.05 * 1.5),
        Output.of('kubejs:raw_nickel', 0.05 * 1.5),
        Output.of('kubejs:raw_osmium', 0.1 * 1.5),
        Output.of('kubejs:raw_silver', 0.05 * 1.5),
        Output.of('kubejs:raw_uranium', 0.0125 * 1.5)
    ],'kubejs:deepslate_gravel','kubejs:iron_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_gold', 0.2),
        Output.of('kubejs:raw_aluminum', 0.025 * 1.5 * 2),
        Output.of('kubejs:raw_lead', 0.05 * 1.5 * 2),
        Output.of('kubejs:raw_nickel', 0.05 * 1.5 * 2),
        Output.of('kubejs:raw_osmium', 0.1 * 1.5 * 2),
        Output.of('kubejs:raw_silver', 0.05 * 1.5 * 2),
        Output.of('kubejs:raw_uranium', 0.0125 * 1.5 * 2),
        Output.of('minecraft:amethyst_shard', 0.1 * 2),
        Output.of('mysticalagriculture:prosperity_shard', 0.15)
    ],'kubejs:deepslate_gravel','createsifter:brass_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_gold', 0.3),
        Output.of('kubejs:raw_aluminum', 0.025 * 1.5 * 2 * 2.5),
        Output.of('kubejs:raw_lead', 0.05 * 1.5 * 2 * 2.5),
        Output.of('kubejs:raw_nickel', 0.05 * 1.5 * 2 * 2.5),
        Output.of('kubejs:raw_osmium', 0.1 * 1.5 * 2 * 2.5),
        Output.of('kubejs:raw_silver', 0.05 * 1.5 * 2 * 2.5),
        Output.of('kubejs:raw_uranium', 0.0125 * 1.5 * 2 * 2.5),
        Output.of('minecraft:amethyst_shard', 0.2),
        Output.of('mysticalagriculture:prosperity_shard', 0.25)
    ],'kubejs:deepslate_gravel','kubejs:netherite_mesh')
})