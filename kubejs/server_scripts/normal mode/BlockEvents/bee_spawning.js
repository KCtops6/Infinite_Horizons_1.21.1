BlockEvents.rightClicked('minecraft:bee_nest', event => {
    const { block, item, player, level } = event;
    const { x, y, z } = block;

    if (item.id !== 'productivebees:honey_treat') return;

    const belowBlock = level.getBlock(x, y - 1, z).id;

    // Map blocks to the bee eggs
    const beeMap = {
        'minecraft:glowstone': 'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:glowing"}]',
        'minecraft:coarse_dirt': 'productivebees:spawn_egg_chocolate_mining_bee'
    };

    const beeEgg = beeMap[belowBlock];
    if (beeEgg) {
        player.runCommandSilent(`give @s ${beeEgg}`);
        player.mainHandItem.count--;
    }
});
