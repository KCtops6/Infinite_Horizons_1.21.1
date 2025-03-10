LootJS.modifiers(event => {
    event.addTableModifier("minecraft:blocks/dirt").addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.25)).matchMainHand("kubejs:wooden_trowel")
    event.addTableModifier("minecraft:blocks/grass_block").addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.25)).matchMainHand("kubejs:wooden_trowel")
    event.addTableModifier("minecraft:blocks/dirt").addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.5)).matchMainHand("kubejs:stone_trowel")
    event.addTableModifier("minecraft:blocks/grass_block").addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.5)).matchMainHand("kubejs:stone_trowel")
    event.addTableModifier("minecraft:blocks/dirt").addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.25)).matchMainHand("kubejs:stone_trowel")
    event.addTableModifier("minecraft:blocks/grass_block").addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.25)).matchMainHand("kubejs:stone_trowel")
})