LootJS.modifiers(event => {
    // You have a chance of getting tree bark when breaking log blocks.
    event.addBlockModifier("#minecraft:overworld_natural_logs")
        .matchTool("#minecraft:axes")
        .addLoot(LootEntry.of("farmersdelight:tree_bark").randomChance(0.25))
})