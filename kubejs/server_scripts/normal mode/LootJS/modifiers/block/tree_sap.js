LootJS.modifiers(event => {
    let trees = ['birch', 'jungle'];
    // You have a chance of getting tree sap when breaking birch or jungle log blocks.
    trees.forEach(tree => {
        event.addBlockModifier(`#minecraft:${tree}_logs`) // when breaking a birch or jungle log...
            .matchTool("#minecraft:axes")   // ...with an axe...
            .randomChance(0.25)
            .addLoot(LootEntry.of("kubejs:tree_sap"))
    });
})