LootJS.modifiers(event => {
    event.addTableModifier("minecraft:blocks/cobblestone").removeLoot("minecraft:cobblestone").addLoot(LootEntry.of("minecraft:gravel")).matchMainHand('kubejs:stone_hammer')
    event.addTableModifier("minecraft:blocks/gravel").removeLoot("minecraft:gravel").addLoot(LootEntry.of("minecraft:sand")).matchMainHand('kubejs:stone_hammer')
})