ServerEvents.recipes(event => {
    const mappings = [
        { input: 'minecraft:cobblestone', output: 'kubejs:stone_hammer'},
        { input: 'minecraft:iron_ingot', output: 'kubejs:iron_hammer'}
    ]

    mappings.forEach(m => {
        event.shaped(
            Item.of(m.output, 1),
            [
                'HHH',
                'HS ',
                ' S '
            ],
            {
                H: m.input,
                S: 'minecraft:stick'
            }
        )
    })
})