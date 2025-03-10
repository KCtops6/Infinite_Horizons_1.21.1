// Listen to item registry event
StartupEvents.registry('item', event => {
    event.create('wooden_trowel', 'shovel').tier('wood')
    event.create('stone_trowel', 'shovel').tier('stone')
})