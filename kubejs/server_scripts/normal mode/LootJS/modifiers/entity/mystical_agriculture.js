LootJS.modifiers(event => {
    const TIER_2_MOBS = [
        'pig', 'chicken', 'cow', 'sheep', 'squid', 'fish', 'slime' 
    ];
    TIER_2_MOBS.forEach(mob => {
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:prudentium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.25)
            .addLoot(LootEntry.of('mysticalagriculture:prudentium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:tertium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.375)
            .addLoot(LootEntry.of('mysticalagriculture:prudentium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:imperium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.5)
            .addLoot(LootEntry.of('mysticalagriculture:prudentium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:supremium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.625)
            .addLoot(LootEntry.of('mysticalagriculture:prudentium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:awakened_supremium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.75)
            .addLoot(LootEntry.of('mysticalagriculture:prudentium_essence'));
    });
    const TIER_3_MOBS = [
        'zombie', 'skeleton', 'creeper', 'spider', 'phantom', 'rabbit'
    ];
    TIER_3_MOBS.forEach(mob => {
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:tertium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.25)
            .addLoot(LootEntry.of('mysticalagriculture:tertium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:imperium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.375)
            .addLoot(LootEntry.of('mysticalagriculture:tertium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:supremium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.5)
            .addLoot(LootEntry.of('mysticalagriculture:tertium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:awakened_supremium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.625)
            .addLoot(LootEntry.of('mysticalagriculture:tertium_essence'));
    });
    const TIER_4_MOBS = [
        'breeze', 'blaze', 'ghast', 'enderman'
    ];
    TIER_4_MOBS.forEach(mob => {
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:imperium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.25)
            .addLoot(LootEntry.of('mysticalagriculture:imperium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:supremium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.375)
            .addLoot(LootEntry.of('mysticalagriculture:imperium_essence'));
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:awakened_supremium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .randomChance(0.5)
            .addLoot(LootEntry.of('mysticalagriculture:imperium_essence'));
    });
    event.addEntityModifier('wither_skeleton')
        .matchTool(Item.of('mysticalagriculture:supremium_sword'))
        .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
        .randomChance(0.25)
        .addLoot(LootEntry.of('mysticalagriculture:supremium_essence'));
    event.addEntityModifier('wither_skeleton')
        .matchTool(Item.of('mysticalagriculture:awakened_supremium_sword'))
        .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
        .randomChance(0.375)
        .addLoot(LootEntry.of('mysticalagriculture:supremium_essence'));
    const TIER_6_MOBS = [
        'wither', 'ender_dragon'
    ];
    TIER_6_MOBS.forEach(mob => {
        event.addEntityModifier(mob)
            .matchTool(Item.of('mysticalagriculture:awakened_supremium_sword'))
            .removeLoot(LootEntry.of('mysticalagriculture:inferium_essence'))
            .addLoot(LootEntry.of('mysticalagradditions:insanium_essence'));
    });
});