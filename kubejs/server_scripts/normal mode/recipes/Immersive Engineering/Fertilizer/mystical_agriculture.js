//ignored: false
//requires: immersiveengineering
ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:fertilizer",
        growthModifier: 2.5,
        input: {
            item: 'mysticalagriculture:mystical_fertilizer'
        }
    })
})