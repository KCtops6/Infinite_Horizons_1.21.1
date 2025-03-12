LootJS.modifiers(event => {
    event.addTableModifier("minecraft:blocks/cobblestone").removeLoot("minecraft:cobblestone").addLoot(LootEntry.of("minecraft:gravel")).matchMainHand('kubejs:stone_hammer')
    event.addTableModifier("minecraft:blocks/gravel").removeLoot("minecraft:gravel").addLoot(LootEntry.of("minecraft:sand")).matchMainHand('kubejs:stone_hammer')
    event.addTableModifier("minecraft:blocks/tuff").removeLoot("minecraft:tuff").addLoot(LootEntry.of("kubejs:tuff_gravel")).matchMainHand('kubejs:stone_hammer')
    event.addTableModifier("minecraft:blocks/cobbled_deepslate").removeLoot("minecraft:cobbled_deepslate").addLoot(LootEntry.of("kubejs:deepslate_gravel")).matchMainHand('kubejs:stone_hammer')
})