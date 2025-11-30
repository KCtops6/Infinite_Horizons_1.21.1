ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:powder_snow_bucket', 1),
        [
            ' I ',
            'IBI',
            ' I '
        ],
        {
            B: 'minecraft:bucket',
            I: 'mysticalagriculture:ice_essence'
        }
    )
})