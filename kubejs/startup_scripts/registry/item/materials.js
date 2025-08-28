StartupEvents.registry('item', event => {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    global.dusts.forEach(dust => {
        event.create(`${dust}_dust`).displayName(`${capitalize(dust)} Dust`);
    });
    event.create('ender_pearl_dust').displayName('Ender Pearl Dust');
    event.create('end_stone_dust').displayName('End Stone Dust'); // custom end stone dust.
    event.create('sawdust').displayName("Sawdust");
    
    global.ingots.forEach(ingot => {
        event.create(`${ingot}_ingot`).displayName(`${capitalize(ingot)} Ingot`);
    });

    global.plates.forEach(plate => {
        event.create(`${plate}_plate`).displayName(`${capitalize(plate)} Plate`);
    });

    event.create('silicon').displayName('Silicon');

    global.gems.forEach(gem => {
        event.create(`${gem}_gem`).displayName(`${gem}`);
    })

    global.gears.forEach(gear => {
        event.create(`${gear}_gear`).displayName(`${capitalize(gear)} Gear`);
    })

    global.nuggets.forEach(nugget => {
        event.create(`${nugget}_nugget`).displayName(`${capitalize(nugget)} Nugget`);
    });

    global.raw_ores.forEach(r => {
        event.create(`raw_${r}`).displayName(`Raw ${capitalize(r)}`);
    });

    event.create('coal_coke').displayName('Coal Coke');
});