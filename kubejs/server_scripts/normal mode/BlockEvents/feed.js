/**
 * Summon animals when their respective feed is used on a grass block.
 * Feeds are defined in kubejs/startup_scripts/Registry/Item/items.js
 * Feeds: chicken_feed, cow_feed, pig_feed, sheep_feed, rabbit_feed, horse_feed
 */
BlockEvents.rightClicked(event => {
    let { item, player, block } = event;    // Destructure to get item, player, and block
    if (block.id !== 'minecraft:grass_block') return;   // Only proceed if the clicked block is grass
    if (item.id === 'kubejs:chicken_feed') {    // Check for chicken feed
        player.runCommandSilent(`summon minecraft:chicken ~ ~1 ~`); // Summon chicken above the block
        item.count--; // reduce item stack
    }
    if (item.id === 'kubejs:cow_feed') {    // Check for cow feed
        player.runCommandSilent(`summon minecraft:cow ~ ~1 ~`); // Summon cow above the block
        item.count--; // reduce item stack  
    }
    if (item.id === 'kubejs:pig_feed') {    // Check for pig feed
        player.runCommandSilent(`summon minecraft:pig ~ ~1 ~`); // Summon pig above the block
        item.count--; // reduce item stack
    }
    if (item.id === 'kubejs:sheep_feed') {  // Check for sheep feed
        player.runCommandSilent(`summon minecraft:sheep ~ ~1 ~`);   // Summon sheep above the block
        item.count--; // reduce item stack
    }
    if (item.id === 'kubejs:rabbit_feed') { // Check for rabbit feed
        player.runCommandSilent(`summon minecraft:rabbit ~ ~1 ~`);  // Summon rabbit above the block
        item.count--; // reduce item stack
    }
    if (item.id === 'kubejs:horse_feed') {  // Check for horse feed
        player.runCommandSilent(`summon minecraft:horse ~ ~1 ~`);   // Summon horse above the block
        item.count--; // reduce item stack
    }
});
