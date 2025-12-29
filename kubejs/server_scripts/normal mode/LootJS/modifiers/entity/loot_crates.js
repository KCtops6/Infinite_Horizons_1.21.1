LootJS.modifiers(event => {
    global.crateConfig.forEach(entry => {
        let crateItem = Item.of('ftbquests:lootcrate', { "ftbquests:loot_crate": entry.crate });
        entry.rules.forEach(rule => {
            rule.mobs.forEach(mob => {
                let mobId = mob.includes(':') ? mob : `minecraft:${mob}`;
                event.addEntityModifier(mobId).randomChance(rule.chance).addLoot(crateItem);
            });
        });
    });
});