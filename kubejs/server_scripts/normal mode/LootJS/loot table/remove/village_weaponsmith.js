LootJS.lootTables(event => {
    const ITEMS_TO_REMOVE = [
        'minecraft:oak_sapling', 'minecraft:saddle'
    ]
    ITEMS_TO_REMOVE.forEach(item => {
        event.getLootTable("minecraft:chests/village/village_weaponsmith").firstPool().removeItem(item)
    })
})