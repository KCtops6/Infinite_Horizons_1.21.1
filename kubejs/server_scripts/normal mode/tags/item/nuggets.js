ServerEvents.tags('item', event => {
    const nuggets = [   // materials that have nuggets.
        'brass', 'bronze', 'constantan',
        'copper', 'electrum', 'enderium', 
        'invar', 'lead', 'lumium', 'manasteel', 
        'netherite', 'nickel', 'osmium',
        'signalum', 'silver', 'steel', 'terrasteel',
        'tin', 'uranium', 'zinc'
    ];

    nuggets.forEach(nugget => { // for each material...
        event.add(`c:nuggets/${nugget}`, `kubejs:${nugget}_nugget`);    // ...we add the custom nugget for that material into that 'forge:nuggets/' tag.
    });
})