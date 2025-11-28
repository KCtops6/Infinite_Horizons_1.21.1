/**
 * Trowel block modifiers
 * You get different loot based on the trowel you use.
 */
LootJS.modifiers(event => {
    /**
     * Wooden Trowel gives stone pebbles when breaking dirt/grass block.
     */
    event.addBlockModifier("minecraft:dirt")    // Dirt block modifier
        .matchTool("kubejs:wooden_trowel")   // Match only if using wooden trowel
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.25))    // 25% chance to add stone pebble
        .randomChance(0.25)  // 25% chance to apply the whole modifier
        .removeLoot("minecraft:dirt");  // Remove the dirt drop
    event.addBlockModifier("minecraft:grass_block")   // Grass block modifier
        .matchTool("kubejs:wooden_trowel")  // Match only if using wooden trowel
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.25))    // 25% chance to add stone pebble
        .randomChance(0.25) // 25% chance to apply the whole modifier
        .removeLoot("minecraft:dirt");  // Remove the dirt drop
    
    /**
     * Stone Trowel gives stone and andesite pebbles when breaking dirt/grass block.
     */
    event.addBlockModifier("minecraft:dirt")    // Dirt block modifier
        .matchTool("kubejs:stone_trowel")   // Match only if using stone trowel
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.5))   // 50% chance to add stone pebble
        .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.25))  // 25% chance to add andesite pebble
        .addLoot(LootEntry.of("kubejs:granite_pebble").randomChance(0.25))  // 25% chance to add granite pebble
        .addLoot(LootEntry.of("kubejs:diorite_pebble").randomChance(0.25))  // 25% chance to add diorite pebble
        .randomChance(0.5)  // 50% chance to apply the whole modifier
        .removeLoot("minecraft:dirt");  // Remove the dirt drop
    event.addBlockModifier("minecraft:grass_block")  // Grass block modifier
        .matchTool("kubejs:stone_trowel")   // Match only if using stone trowel
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.5))  // 50% chance to add stone pebble
        .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.25)) // 25% chance to add andesite pebble
        .addLoot(LootEntry.of("kubejs:granite_pebble").randomChance(0.25))  // 25% chance to add granite pebble
        .addLoot(LootEntry.of("kubejs:diorite_pebble").randomChance(0.25))  // 25% chance to add diorite pebble
        .randomChance(0.5)  // 50% chance to apply the whole modifier
        .removeLoot("minecraft:dirt");  // Remove the dirt drop

    /**
     * Iron Trowel gives stone, andesite, granite, diorite, and deepslate pebbles when breaking dirt/grass block.
     */
    event.addBlockModifier("minecraft:dirt")    // Dirt block modifier  
        .matchTool("kubejs:iron_trowel")    // Match only if using iron trowel
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.75))    // 75% chance to add stone pebble
        .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.5))  // 50% chance to add andesite pebble
        .addLoot(LootEntry.of("kubejs:granite_pebble").randomChance(0.5))   // 50% chance to add granite pebble
        .addLoot(LootEntry.of("kubejs:diorite_pebble").randomChance(0.5))   // 50% chance to add diorite pebble
        .addLoot(LootEntry.of("kubejs:deepslate_pebble").randomChance(0.25))    // 25% chance to add deepslate pebble
        .randomChance(0.75) // 75% chance to apply the whole modifier
        .removeLoot("minecraft:dirt");  // Remove the dirt drop
    event.addBlockModifier("minecraft:grass_block")  // Grass block modifier
        .matchTool("kubejs:iron_trowel")    // Match only if using iron trowel
        .addLoot(LootEntry.of("kubejs:stone_pebble").randomChance(0.75))    // 75% chance to add stone pebble
        .addLoot(LootEntry.of("kubejs:andesite_pebble").randomChance(0.5))  // 50% chance to add andesite pebble
        .addLoot(LootEntry.of("kubejs:granite_pebble").randomChance(0.5))   // 50% chance to add granite pebble
        .addLoot(LootEntry.of("kubejs:diorite_pebble").randomChance(0.5))   // 50% chance to add diorite pebble
        .addLoot(LootEntry.of("kubejs:deepslate_pebble").randomChance(0.25))    // 25% chance to add deepslate pebble
        .randomChance(0.75) // 75% chance to apply the whole modifier
        .removeLoot("minecraft:grass_block");   // Remove the dirt drop
    
    /**
     * Stone Trowel gives crushed raw iron when breaking gravel.
     */
    event.addBlockModifier("minecraft:gravel")  // Gravel block modifier
        .matchTool("kubejs:stone_trowel")   // Match only if using stone trowel
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.25))    // 25% chance to add crushed raw iron
        .randomChance(0.25)  // 50% chance to apply the whole modifier
        .removeLoot("minecraft:gravel") // Remove the gravel drop

    event.addBlockModifier("kubejs:andesite_gravel")
        .matchTool("kubejs:stone_trowel")
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.25))
        .randomChance(0.25)
        .removeLoot("kubejs:andesite_gravel")
    event.addBlockModifier("kubejs:granite_gravel")
        .matchTool("kubejs:stone_trowel")
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.25))
        .randomChance(0.25)
        .removeLoot("kubejs:granite_gravel")
    event.addBlockModifier("kubejs:diorite_gravel")
        .matchTool("kubejs:stone_trowel")
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.25))
        .randomChance(0.25)
        .removeLoot("kubejs:diorite_gravel")

    /**
     * Iron Trowel gives various crushed ores and prosperity shards when breaking gravel.
     */
    event.addTableModifier("minecraft:blocks/gravel")   // Gravel loot table modifier
        .matchTool("kubejs:iron_trowel")    // Match only if using iron trowel
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.5))   // 50% chance to add crushed raw iron
        .addLoot(LootEntry.of('create:crushed_raw_copper').randomChance(0.25))  // 25% chance to add crushed raw copper
        .addLoot(LootEntry.of('create:crushed_raw_gold').randomChance(0.125))   // 12.5% chance to add crushed raw gold
        .addLoot(LootEntry.of('create:crushed_raw_zinc').randomChance(0.125))   // 12.5% chance to add crushed raw zinc
        .addLoot(LootEntry.of('mysticalagriculture:prosperity_shard').randomChance(0.125))  // 12.5% chance to add prosperity shard
        .randomChance(0.5) // 75% chance to apply the whole modifier
        .removeLoot("minecraft:gravel") // Remove the gravel drop

    event.addBlockModifier("kubejs:andesite_gravel")
        .matchTool("kubejs:iron_trowel")
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.5))
        .addLoot(LootEntry.of('create:crushed_raw_copper').randomChance(0.25))
        .addLoot(LootEntry.of('create:crushed_raw_gold').randomChance(0.125))
        .addLoot(LootEntry.of('create:crushed_raw_zinc').randomChance(0.125))
        .addLoot(LootEntry.of('mysticalagriculture:prosperity_shard').randomChance(0.125))
        .randomChance(0.5)
        .removeLoot("kubejs:andesite_gravel")
    event.addBlockModifier("kubejs:granite_gravel")
        .matchTool("kubejs:iron_trowel")
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.5))
        .addLoot(LootEntry.of('create:crushed_raw_copper').randomChance(0.25))
        .addLoot(LootEntry.of('create:crushed_raw_gold').randomChance(0.125))
        .addLoot(LootEntry.of('create:crushed_raw_zinc').randomChance(0.125))
        .addLoot(LootEntry.of('mysticalagriculture:prosperity_shard').randomChance(0.125))
        .randomChance(0.5)
        .removeLoot("kubejs:granite_gravel")
    event.addBlockModifier("kubejs:diorite_gravel")
        .matchTool("kubejs:iron_trowel")
        .addLoot(LootEntry.of('create:crushed_raw_iron').randomChance(0.5))
        .addLoot(LootEntry.of('create:crushed_raw_copper').randomChance(0.25))
        .addLoot(LootEntry.of('create:crushed_raw_gold').randomChance(0.125))
        .addLoot(LootEntry.of('create:crushed_raw_zinc').randomChance(0.125))
        .addLoot(LootEntry.of('mysticalagriculture:prosperity_shard').randomChance(0.125))
        .randomChance(0.5)
        .removeLoot("kubejs:diorite_gravel")
    
    /**
     * Iron trowel gives tuff pebbles when breaking tuff gravel and deepslate pebbles, diamonds, lapis, and redstone when breaking deepslate gravel.
     */
    event.addBlockModifier("kubejs:tuff_gravel")    // Tuff gravel block modifier
        .matchTool("kubejs:iron_trowel")    // Match only if using iron trowel
        .addLoot(LootEntry.of("kubejs:deepslate_pebble").randomChance(0.75))    // 75% chance to add deepslate pebble
        .randomChance(0.75) // 75% chance to apply the whole modifier
        .removeLoot("kubejs:tuff_gravel");  // Remove the tuff gravel drop
    
    /**
     * Deepslate gravel block modifier
     */
    event.addBlockModifier("kubejs:deepslate_gravel")   // Deepslate gravel block modifier
        .matchTool("kubejs:iron_trowel")    // Match only if using iron trowel
        .addLoot(LootEntry.of("minecraft:diamond").randomChance(0.125))  // 12.5% chance to add diamond
        .addLoot(LootEntry.of("minecraft:lapis_lazuli").randomChance(0.25)) // 25% chance to add lapis lazuli
        .addLoot(LootEntry.of("minecraft:redstone").randomChance(0.25)) // 25% chance to add redstone
        .randomChance(0.75) // 75% chance to apply the whole modifier
        .removeLoot("kubejs:deepslate_gravel"); // Remove the deepslate gravel drop
})