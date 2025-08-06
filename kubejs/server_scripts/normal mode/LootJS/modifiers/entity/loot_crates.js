let crates = [
    { name: 'dungeon', mobs: ['zombie', 'skeleton', 'spider'], chance: 0.05 },
    { name: 'mineshaft', mobs: ['cave_spider'], chance: 0.05 },
    { name: 'end_city', mobs: ['enderman'], chance: 0.01 },
    { name: 'bastion_treasure', mobs: ['piglin'], chance: 0.1 },
    { name: 'bastion', mobs: ['piglin'], chance: 0.15 },
    { name: 'bastion_bridge', mobs: ['piglin'], chance: 0.15 },
    { name: 'bastion_treasure', mobs: ['piglin_brute'], chance: 0.2 },
    { name: 'bastion', mobs: ['piglin_brute'], chance: 0.25 },
    { name: 'bastion_bridge', mobs: ['piglin_brute'], chance: 0.25 },
    { name: 'bastion_hoglin_stable', mobs: ['hoglin'], chance: 0.15 },
    { name: 'nether_fortress', mobs: ['wither_skeleton', 'blaze'], chance: 0.1 }
]
LootJS.modifiers(event => {
    crates.forEach(c => {
        c.mobs.forEach(m => {
            event.addEntityModifier(`minecraft:${m}`)
                .randomChance(c.chance)
                .addLoot(`ftbquests:lootcrate[ftbquests:loot_crate="${c.name}"]`)
        })
    })
})