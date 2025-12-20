ServerEvents.recipes(event => {
    global.ingots.forEach(i => {
        if (global.nuggets.includes(i)) {
            event.shaped(`kubejs:${i}_ingot`, [
                'NNN',
                'NNN',
                'NNN'
            ], {
                N: `kubejs:${i}_nugget`
            }).id(`${i}_ingot_from_nugget`);
        }
        if (global.blocks.includes(i)) {
            event.shaped(`kubejs:${i}_block`, [
                'III',
                'III',
                'III'
            ], {
                I: `kubejs:${i}_ingot`
            }).id(`${i}_block_from_ingot`);
        }
    });
    global.gems.forEach(i => {
        if (global.blocks.includes(i)) {
            event.shaped(`kubejs:${i}_block`, [
                'III',
                'III',
                'III'
            ], {
                I: `kubejs:${i}_gem`
            }).id(`${i}_block_from_gem`);
        }
    });
    event.shaped('kubejs:dormant_trial_spawner', [
        'PPP',
        'BBB',
        'PBP'
    ], {
        P: 'kubejs:netherite_plate',
        B: 'kubejs:netherite_bars'
    }).id('dormant_trial_spawner');
});