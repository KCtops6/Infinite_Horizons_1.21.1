LootJS.modifiers(event => {
    // Wooden Trowel gives stone pebbles when breaking dirt/grass block.
    event.addTableModifier("minecraft:blocks/dirt")
        .removeLoot(LootEntry.of("minecraft:dirt").randomChance(0.25))
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.25))
        .matchMainHand("kubejs:wooden_trowel")
    event.addTableModifier("minecraft:blocks/grass_block")
        .removeLoot(LootEntry.of("minecraft:grass_block").randomChance(0.25))
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.25))
        .matchMainHand("kubejs:wooden_trowel")
    
    // Stone Trowel gives stone and andesite pebbles when breaking dirt/grass block.
    event.addTableModifier("minecraft:blocks/dirt")
        .removeLoot(LootEntry.of("minecraft:dirt").randomChance(0.5))
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.5))
        .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.25))
        .matchMainHand("kubejs:stone_trowel")
    event.addTableModifier("minecraft:blocks/grass_block")
        .removeLoot(LootEntry.of("minecraft:grass_block").randomChance(0.5))
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.5))
        .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.25))
        .matchMainHand("kubejs:stone_trowel")

    // Iron Trowel gives stone and andesite pebbles when breaking dirt/grass block.
    event.addTableModifier("minecraft:blocks/dirt")
        .removeLoot(LootEntry.of("minecraft:dirt").randomChance(0.5))
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.75))
        .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.5))
        .matchMainHand("kubejs:iron_trowel")
    event.addTableModifier("minecraft:blocks/grass_block")
        .removeLoot(LootEntry.of("minecraft:grass_block").randomChance(0.5))
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.75))
        .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.5))
        .matchMainHand("kubejs:iron_trowel")
    
    // Stone Trowel gives crushed raw iron when breaking gravel.
    event.addTableModifier("minecraft:blocks/gravel")
        .removeLoot(LootEntry.of("minecraft:gravel").randomChance(0.5))
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.25))
        .matchMainHand("kubejs:stone_trowel")

    // Iron Trowel gives crushed raw iron, copper, gold, and zinc when breaking gravel.
    event.addTableModifier("minecraft:blocks/gravel")
        .removeLoot(LootEntry.of("minecraft:gravel").randomChance(0.75))
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.5))
        .addLoot(LootEntry.of('create:crushed_raw_copper').randomChance(0.25))
        .addLoot(LootEntry.of('create:crushed_raw_gold').randomChance(0.125))
        .addLoot(LootEntry.of('create:crushed_raw_zinc').randomChance(0.125))
        .matchMainHand("kubejs:iron_trowel")
})