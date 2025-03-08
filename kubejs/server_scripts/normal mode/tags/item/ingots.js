ServerEvents.tags('item', event => {
    const ingots = [    // materials that have ingots.
        'aluminum', 'brass', 'bronze',
        'constantan', 'electrum', 'elementium', 'enderium',
        'infinitium', 'invar', 'lead',
        'lumium', 'manasteel', 'nickel',
        'osmium', 'signalum', 'silver',
        'steel', 'terrasteel',
        'tin', 'uranium', 'zinc'
    ];
    
    ingots.forEach(ingot => {   // for each material...
        event.add(`c:ingots/${ingot}`, `kubejs:${ingot}_ingot`);    // ...we add the custom ingot for that material into that 'forge:ingots/' tag.
    });
})