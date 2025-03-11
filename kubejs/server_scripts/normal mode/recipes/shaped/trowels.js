ServerEvents.recipes(event => {
    const mappings = [
        { input: '#minecraft:planks', output: 'kubejs:wooden_trowel'},
        { input: 'minecraft:cobblestone', output: 'kubejs:stone_trowel'}
    ]

    mappings.forEach(m => {
        event.shaped(
            Item.of(m.output, 1),
            [
                ' H ',
                'HSH',
                ' S '
            ],
            {
                H: m.input,
                S: 'minecraft:stick'
            }
        )
    })
})