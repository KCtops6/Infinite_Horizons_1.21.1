LootJS.modifiers(event => {
    global.crateConfig.forEach(entry => {
        let crateItem = Item.of('ftbquests:lootcrate', { "ftbquests:loot_crate": entry.crate });
        entry.rules.forEach(rule => {
            rule.mobs.forEach(mobInput => {
                let mobId = mobInput.includes(':') ? mobInput : `minecraft:${mobInput}`;
                event.addEntityModifier(mobId)
                    .randomChance(rule.chance)
                    .addLoot(crateItem);
            });
        });
    });
});