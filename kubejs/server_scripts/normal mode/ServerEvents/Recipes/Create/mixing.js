ServerEvents.recipes(event => {
    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
                tag: "infinitehorizons:pebbles"
            }
        ],
        results: [
            {
                amount: 250,
                id: "minecraft:lava"
            }
        ]
    })
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:redstone"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "minecraft:water"
            }
        ],
        results: [
            {
                amount: 250,
                id: "immersiveengineering:redstone_acid"
            }
        ]
    })
})