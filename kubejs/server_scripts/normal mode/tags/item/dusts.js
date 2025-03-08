ServerEvents.tags('item', event => {
    const dusts = [ // materials that have dusts.
        'aluminum', 'apatite', 'brass',
        'bronze', 'charcoal', 'cinnabar',
        'constantan', 'coal', 'copper',
        'diamond', 'electrum', 'elementium', 'emerald',
        'enderium', 'gold', 'invar',
        'iron', 'lapis', 'lead',
        'lumium', 'manasteel', 'netherite', 'nickel',
        'niter', 'obsidian', 'osmium',
        'quartz', 'sapphire', 'signalum',
        'silver', 'steel', 'sulfur',
        'terrasteel', 'ruby', 'tin',
        'uranium', 'zinc'
    ];

    dusts.forEach(dust => { // for each material...
        event.add(`c:dusts/${dust}`, `kubejs:${dust}_dust`);    // ...we add the custom dust for that material into that 'forge:dusts/' tag.
    });
})