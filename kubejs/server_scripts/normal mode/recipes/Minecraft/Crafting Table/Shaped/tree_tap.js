ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:tree_tap', 1),
        [
            ' S ',
            'PPP',
            'P  '
        ],
        {
            S: 'minecraft:stick',
            W: '#minecraft:planks'
        }
    )
});