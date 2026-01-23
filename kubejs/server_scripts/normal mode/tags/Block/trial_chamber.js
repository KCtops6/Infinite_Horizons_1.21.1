ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', 'minecraft:trial_spawner')
    event.add('minecraft:needs_diamond_tool', 'minecraft:trial_spawner')
})
