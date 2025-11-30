//ignored: false
ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:bone_meal', 0.35),
        Output.of('minecraft:cactus', 0.15)
    ],'minecraft:sand','createsifter:string_mesh')
})