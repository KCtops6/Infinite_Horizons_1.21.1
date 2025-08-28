//ignored: false
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
})