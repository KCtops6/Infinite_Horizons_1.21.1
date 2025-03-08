ServerEvents.tags('item', event => {
    const plates = [    // materials that have plates.
        'aluminum', 'brass', 'bronze',
        'constantan', 'copper', 'electrum',
        'enderium', 'gold', 'infinitium',
        'invar', 'iron', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'signalum', 'silver', 'steel',
        'terrasteel', 'tin', 'zinc'
    ];

    plates.forEach(plate => {   // for each material...
        event.add(`c:plates/${plate}`, `kubejs:${plate}_plate`);    // ...we add the custom plate for that material into that 'forge:plates/' tag.
    });
})