LootJS.modifiers(event => {
    const tiers = [
        {
            mobs: ['pig', 'chicken', 'cow', 'sheep', 'squid', 'fish', 'slime', 'turtle', 'armadillo'],
            essence: 'mysticalagriculture:prudentium_essence',
            swords: [
                { id: 'prudentium_sword', chance: 0.5 },
                { id: 'tertium_sword', chance: 0.625 },
                { id: 'imperium_sword', chance: 0.75 },
                { id: 'supremium_sword', chance: 0.875 },
                { id: 'awakened_supremium_sword', chance: 1.0 }
            ]
        },
        {
            mobs: ['zombie', 'skeleton', 'creeper', 'spider', 'phantom', 'rabbit'],
            essence: 'mysticalagriculture:tertium_essence',
            swords: [
                { id: 'tertium_sword', chance: 0.5 },
                { id: 'imperium_sword', chance: 0.625 },
                { id: 'supremium_sword', chance: 0.75 },
                { id: 'awakened_supremium_sword', chance: 0.875 }
            ]
        },
        {
            mobs: ['breeze', 'blaze', 'ghast', 'enderman'],
            essence: 'mysticalagriculture:imperium_essence',
            swords: [
                { id: 'imperium_sword', chance: 0.5 },
                { id: 'supremium_sword', chance: 0.625 },
                { id: 'awakened_supremium_sword', chance: 0.75 }
            ]
        },
        {
            mobs: ['wither_skeleton'],
            essence: 'mysticalagriculture:supremium_essence',
            swords: [
                { id: 'supremium_sword', chance: 0.5 },
                { id: 'awakened_supremium_sword', chance: 0.625 }
            ]
        },
        {
            mobs: ['wither', 'ender_dragon'],
            essence: 'mysticalagradditions:insanium_essence',
            swords: [
                { id: 'awakened_supremium_sword', chance: 0.5 }
            ]
        }
    ];
    tiers.forEach(tier => {
        tier.mobs.forEach(mob => {
            let mobId = mob.includes(':') ? mob : `minecraft:${mob}`;
            tier.swords.forEach(sword => {
                let modifier = event.addEntityModifier(mobId)
                    .matchEquip('mainhand', `mysticalagriculture:${sword.id}`)
                    .removeLoot('mysticalagriculture:inferium_essence');
                if (sword.chance < 1.0) {
                    modifier.addLoot(LootEntry.of(tier.essence).randomChance(sword.chance));
                } else {
                    modifier.addLoot(LootEntry.of(tier.essence));
                }
            });
        });
    });
});