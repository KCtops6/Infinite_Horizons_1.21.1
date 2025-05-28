//ignored: false
ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('mysticalagriculture:soulium_dust', 0.1),
    ],'minecraft:soul_sand','createsifter:andesite_mesh')
})