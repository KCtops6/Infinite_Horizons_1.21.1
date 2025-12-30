ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.375),
        Output.of('minecraft:raw_iron', 0.25),
        Output.of('minecraft:raw_copper', 0.375),
        Output.of('create:raw_zinc', 0.25),
        Output.of('kubejs:raw_tin', 0.125)
    ],'minecraft:gravel','kubejs:iron_mesh');
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.5),
        Output.of('minecraft:lapis_lazuli', 0.125),
        Output.of('minecraft:emerald', 0.125),
        Output.of('minecraft:raw_iron', 0.375),
        Output.of('minecraft:raw_copper', 0.5),
        Output.of('minecraft:raw_gold', 0.125),
        Output.of('create:raw_zinc', 0.375),
        Output.of('kubejs:raw_tin', 0.25),
        Output.of('kubejs:apatite_gem', 0.125),
        Output.of('kubejs:cinnabar_gem', 0.125),
        Output.of('kubejs:niter_gem', 0.125)
    ],'minecraft:gravel','createsifter:brass_mesh');
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.625),
        Output.of('minecraft:lapis_lazuli', 0.25),
        Output.of('minecraft:redstone', 0.125),
        Output.of('minecraft:emerald', 0.25),
        Output.of('minecraft:raw_iron', 0.5),
        Output.of('minecraft:raw_copper', 0.625),
        Output.of('minecraft:raw_gold', 0.25),
        Output.of('create:raw_zinc', 0.5),
        Output.of('kubejs:raw_tin', 0.375),
        Output.of('kubejs:apatite_gem', 0.25),
        Output.of('kubejs:cinnabar_gem', 0.25),
        Output.of('kubejs:niter_gem', 0.25)
    ],'minecraft:gravel','kubejs:netherite_mesh');

    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.125),
        Output.of('minecraft:lapis_lazuli', 0.125),
        Output.of('minecraft:redstone', 0.25),
        Output.of('minecraft:amethyst_shard', 0.125),
        Output.of('minecraft:raw_gold', 0.125),
    ], 'kubejs:deepslate_gravel', 'kubejs:iron_mesh');
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.25),
        Output.of('minecraft:lapis_lazuli', 0.25),
        Output.of('minecraft:redstone', 0.375),
        Output.of('minecraft:amethyst_shard', 0.25),
        Output.of('minecraft:diamond', 0.125),
        Output.of('minecraft:raw_iron', 0.125),
        Output.of('minecraft:raw_gold', 0.25),
    ], 'kubejs:deepslate_gravel', 'createsifter:brass_mesh');
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.375),
        Output.of('minecraft:lapis_lazuli', 0.375),
        Output.of('minecraft:redstone', 0.5),
        Output.of('minecraft:amethyst_shard', 0.375),
        Output.of('minecraft:diamond', 0.125),
        Output.of('minecraft:raw_iron', 0.25),
        Output.of('minecraft:raw_copper', 0.125),
        Output.of('minecraft:raw_gold', 0.375),
        Output.of('kubejs:peridot_gem', 0.125),
        Output.of('kubejs:ruby_gem', 0.125),
        Output.of('kubejs:sapphire_gem', 0.125)
    ], 'kubejs:deepslate_gravel', 'kubejs:netherite_mesh');

    event.recipes.createsifter.sifting([
        Output.of('minecraft:warped_fungus', 0.125),
        Output.of('minecraft:warped_roots', 0.25),
        Output.of('minecraft:crimson_fungus', 0.125),
        Output.of('minecraft:crimson_roots', 0.25)
    ], 'createsifter:crushed_netherrack', "createsifter:string_mesh");
    event.recipes.createsifter.sifting([
        Output.of('minecraft:raw_gold', 0.25),
        Output.of('kubejs:sulfur_gem', 0.5)
    ], 'createsifter:crushed_netherrack', "kubejs:iron_mesh");
    event.recipes.createsifter.sifting([
        Output.of('minecraft:netherite_scrap', 0.125),
        Output.of('minecraft:raw_gold', 0.75),
        Output.of('kubejs:sulfur_gem', 0.675)
    ], 'createsifter:crushed_netherrack', "createsifter:brass_mesh");
    event.recipes.createsifter.sifting([
        Output.of('minecraft:netherite_scrap', 0.25),
        Output.of('minecraft:raw_gold', 0.5),
        Output.of('kubejs:sulfur_gem', 0.75),
    ], 'createsifter:crushed_netherrack', "kubejs:netherite_mesh");

    event.recipes.createsifter.sifting([
        Output.of('pamhc2crops:aridgarden', 0.1),
        Output.of('pamhc2crops:frostgarden', 0.1),
        Output.of('pamhc2crops:shadedgarden', 0.1),
        Output.of('pamhc2crops:soggygarden', 0.1),
        Output.of('pamhc2crops:tropicalgarden', 0.1),
        Output.of('pamhc2crops:windygarden', 0.1),
    ],'minecraft:grass_block','createsifter:string_mesh');

    event.recipes.createsifter.sifting([
        Output.of('minecraft:wheat_seeds', 0.5),
        Output.of('minecraft:pumpkin_seeds', 0.25),
        Output.of('minecraft:melon_seeds', 0.25),
        Output.of('minecraft:beetroot_seeds', 0.25),
        Output.of('farmersdelight:wild_rice', 0.125)
    ],'minecraft:dirt','createsifter:string_mesh');

    event.recipes.createsifter.sifting([
        Output.of('minecraft:kelp', 0.25),
        Output.of('minecraft:seagrass', 0.375),
        Output.of('minecraft:sugar_cane', 0.125),
        Output.of('minecraft:nautilus_shell', 0.0625),
    ], 'minecraft:sand','createsifter:string_mesh').waterlogged(true);
})