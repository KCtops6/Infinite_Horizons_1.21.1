StartupEvents.registry('item', event => {
    event.create('wooden_trowel', 'shovel').tier('wood')
    event.create('stone_trowel', 'shovel').tier('stone')
    event.create('iron_trowel', 'shovel').tier('iron')

    event.create('stone_hammer', 'pickaxe').tier('stone')
    event.create('iron_hammer', 'pickaxe').tier('iron')
})