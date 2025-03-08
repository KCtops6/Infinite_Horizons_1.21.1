ServerEvents.tags('item', event => {
    const gears = [ // materials that have gears.
        'bronze', 'constantan', 'copper',
        'diamond', 'electrum', 'emerald',
        'enderium', 'gold', 'invar',
        'iron', 'lapis', 'lead',
        'lumium', 'manasteel', 'netherite',
        'nickel', 'quartz', 'ruby', 
        'sapphire', 'signalum', 'silver',
        'terrasteel', 'tin'
    ];

    gears.forEach(gears => {    // for each material...
        event.add(`c:gears/${gears}`, `kubejs:${gears}_gear`);  // ...we add the custom gear for that material into that 'forge:gears/' tag.
    });
})