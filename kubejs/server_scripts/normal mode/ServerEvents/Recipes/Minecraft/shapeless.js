ServerEvents.recipes(event => {
    global.gems.forEach(i => {
        if (global.blocks.includes(i)) {
            event.shapeless(Item.of(`kubejs:${i}_gem`, 9), [`kubejs:${i}_block`]);
        }
    });
    global.ingots.forEach(i => {
        if (global.blocks.includes(i)) {
            event.shapeless(Item.of(`kubejs:${i}_ingot`, 9), [`kubejs:${i}_block`]);
        }
    });
    event.shapeless(Item.of('create_deep_dark:echo_ingot, 9'), ['create_deep_dark:echo_block']);
});