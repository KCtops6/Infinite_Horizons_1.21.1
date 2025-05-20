//ignored: false
//requires: immersiveengineering
ServerEvents.recipes(event => {
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