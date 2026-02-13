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
    global.raw_ores.forEach(i => {
        if (global.raw_ore_blocks.includes(i)) {
            event.shapeless(Item.of(`kubejs:raw_${i}`, 9), [`kubejs:block_of_raw_${i}`]);
        }
    });
    event.shapeless(Item.of('create_deep_dark:echo_ingot', 9), ['create_deep_dark:echo_block']);
});