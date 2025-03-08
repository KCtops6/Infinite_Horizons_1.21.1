ServerEvents.tags('item', event => {
    const blocks = [    // materials that have blocks.
        'aluminum', 'apatite', 'brass',
        'bronze', 'cinnabar', 'constantan',
        'copper', 'electrum', 'elementium', 'enderium',
        'gold', 'infinitium', 'invar',
        'iron', 'lead', 'lumium',
        'manasteel', 'nickel', 'niter',
        'osmium', 'ruby', 'sapphire',
        'signalum', 'silver', 'steel',
        'sulfur', 'terrasteel', 'tin',
        'uranium', 'zinc'
    ];

    blocks.forEach(block => {   // for each material...
        event.add(`c:storage_blocks/${block}`, `kubejs:${block}_block`);    // ...we add the custom block for that material into that 'forge:storage_blocks/' tag.
    });
})