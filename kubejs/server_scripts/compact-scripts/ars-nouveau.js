if (Platform.isLoaded('ars_nouveau')) {
    console.log("Ars Nouveau installed... loading compact scripts.");

    let leafDrops = {
        'ars_nouveau:blue_archwood_leaves': { pod: 'ars_nouveau:frostaya_pod', name: 'Blue Archwood Leaves' },
        'ars_nouveau:red_archwood_leaves': { pod: 'ars_nouveau:bombegranate_pod', name: 'Red Archwood Leaves' },
        'ars_nouveau:purple_archwood_leaves': { pod: 'ars_nouveau:bastion_pod', name: 'Purple Archwood Leaves' },
        'ars_nouveau:green_archwood_leaves': { pod: 'ars_nouveau:mendosteen_pod', name: 'Green Archwood Leaves' }
    };

    var shiftHint = Text.yellow("Press ").italic()
        .append(Text.gold("Shift").bold())
        .append(Text.yellow(" for more info...").italic());

    ServerEvents.recipes(event => {
        event.custom({
            type: "ars_nouveau:imbuement",
            input: { tag: "c:berries/sweetberry" },
            output: { count: 1, id: "ars_nouveau:sourceberry_bush" },
            pedestalItems: [],
            source: 500
        });
    });

    ItemEvents.modifyTooltips(event => {
        const ARCHWOOD_SAPLINGS = [
            'ars_nouveau:blue_archwood_sapling', 
            'ars_nouveau:red_archwood_sapling', 
            'ars_nouveau:purple_archwood_sapling', 
            'ars_nouveau:green_archwood_sapling'
        ];
        
        const SHARDS = [
            'ars_nouveau:starbuncle_shards', 
            'ars_nouveau:wixie_shards', 
            'ars_nouveau:whirlisprig_shards', 
            'ars_nouveau:alakarkinos_token', 
            'ars_nouveau:drygmy_shard'
        ];

        // Helper to add the shift-logic easily
        const addSmartTooltip = (item, line) => {
            event.modify(item, { shift: false }, t => t.insert(1, SHIFT_HINT));
            event.modify(item, { shift: true }, t => t.insert(1, line));
        };

        ARCHWOOD_SAPLINGS.forEach(s => 
            addSmartTooltip(s, Text.darkGreen('Crafted from ').append(Text.green('Wood & Nature').bold()).append(Text.darkGreen(' essences.')))
        );

        SHARDS.forEach(s => 
            addSmartTooltip(s, Text.darkGreen('Obtained from a ').append(Text.green('Shady Wizard').bold()).append('.'))
        );

        Object.entries(leafDrops).forEach(([leaf, data]) => {
            addSmartTooltip(data.pod, Text.darkGreen('Chance to drop from ').append(Text.green(data.name).bold()).append('.'));
        });
    });

    LootJS.modifiers(event => {
        Object.entries(leafDrops).forEach(([leaf, data]) => {
            event.addBlockModifier(leaf).addLoot(LootEntry.of(data.pod).randomChance(0.1));
        });
    });

} else {
    console.log("Ars Nouveau not installed... ignoring compat scripts.");
}