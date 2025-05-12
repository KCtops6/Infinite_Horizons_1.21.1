ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:cloche",    // type of garden cloche.
        input: {
            item: 'farmersdelight:tomato_seeds'  // tomato seeds as imput.
        },
        render: {
            type: "immersiveengineering:crop",  // renders it as a growing block inside the machine...
            block: 'farmersdelight:budding_tomatoes' // ...with appearance of tomatoes.
        },
        results: [
            {
                item: 'farmersdelight:tomato'   // output of tomato.
            },
            {
                item: 'farmersdelight:tomato_seeds', // secondary output of tomato seeds.
            }
        ],
        soil: {
            item: 'minecraft:dirt'  // soil of farmland.
        },
        time: 600
    })
    event.custom({
        type: "immersiveengineering:cloche",    // type of garden cloche.
        input: {
            item: 'farmersdelight:cabbage_seeds'  // cabbage seeds as imput.
        },
        render: {
            type: "immersiveengineering:crop",  // renders it as a growing block inside the machine...
            block: 'farmersdelight:cabbages' // ...with appearance of cabbages.
        },
        results: [
            {
                item: 'farmersdelight:cabbage'   // output of cabbage.
            },
            {
                item: 'farmersdelight:cabbage_seeds', // secondary output of cabbage seeds.
            }
        ],
        soil: {
            item: 'minecraft:dirt'  // soil of farmland.
        },
        time: 600
    })
})