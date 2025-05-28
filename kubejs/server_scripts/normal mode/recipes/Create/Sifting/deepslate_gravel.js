ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_gold', 0.2),
        Output.of('mysticalagriculture:prosperity_shard', 0.15),
    ],'kubejs:deepslate_gravel','createsifter:andesite_mesh')
})