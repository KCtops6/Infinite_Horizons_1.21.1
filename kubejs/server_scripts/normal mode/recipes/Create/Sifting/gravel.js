//ignored: false
function ironMultiplier(x) { return x * 1.2 }   // 20% increase over copper
function brassMultiplier(x) { return ironMultiplier(x) * 1.4 }  // 40% increase over iron
function netheriteMultiplier(x) { return brassMultiplier(x) * 1.6 } // 60% increase over brass
ServerEvents.recipes(event => {
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', 0.3),
        Output.of('minecraft:raw_iron', 0.25),
        Output.of('minecraft:raw_copper', 0.3),
        Output.of('minecraft:raw_gold', 0.15),
        Output.of('create:raw_zinc', 0.2),
        Output.of('kubejs:raw_tin', 0.25),
        Output.of('kubejs:raw_lead', 0.1)
    ],'minecraft:gravel','kubejs:copper_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', ironMultiplier(0.3)),
        Output.of('minecraft:raw_iron', ironMultiplier(0.25)),
        Output.of('minecraft:raw_copper', ironMultiplier(0.3)),
        Output.of('minecraft:raw_gold', ironMultiplier(0.15)),
        Output.of('create:raw_zinc', ironMultiplier(0.2)),
        Output.of('kubejs:raw_tin', ironMultiplier(0.25)),
        Output.of('kubejs:raw_lead', ironMultiplier(0.1))
    ],'minecraft:gravel','kubejs:iron_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', brassMultiplier(0.3)),
        Output.of('minecraft:raw_iron', brassMultiplier(0.25)),
        Output.of('minecraft:raw_copper', brassMultiplier(0.3)),
        Output.of('minecraft:raw_gold', brassMultiplier(0.15)),
        Output.of('create:raw_zinc', brassMultiplier(0.2)),
        Output.of('kubejs:raw_tin', brassMultiplier(0.25)),
        Output.of('kubejs:raw_lead', brassMultiplier(0.1))
    ],'minecraft:gravel','createsifter:brass_mesh')
    event.recipes.createsifter.sifting([
        Output.of('minecraft:coal', netheriteMultiplier(0.3)),
        Output.of('minecraft:raw_iron', netheriteMultiplier(0.25)),
        Output.of('minecraft:raw_copper', netheriteMultiplier(0.3)),
        Output.of('minecraft:raw_gold', netheriteMultiplier(0.15)),
        Output.of('create:raw_zinc', netheriteMultiplier(0.2)),
        Output.of('kubejs:raw_tin', netheriteMultiplier(0.25)),
        Output.of('kubejs:raw_lead', netheriteMultiplier(0.1))
    ],'minecraft:gravel','kubejs:netherite_mesh')
    
})