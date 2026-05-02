ServerEvents.recipes(event => {
    event.blasting('create:scorchia', 'create:scoria', 0.25, 175)
    global.raw_ores.forEach(i => {
        event.blasting(`kubejs:${i}_ingot`, `kubejs:raw_${i}`).id(`${i}_ingot_from_raw_${i}`);
    });
})