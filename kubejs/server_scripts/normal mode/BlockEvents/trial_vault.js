BlockEvents.rightClicked('minecraft:chest', event => { 
    const { item, level, player, server } = event;
    const { x, y, z } = event.block;

    // Must hold a Trial Key
    if (item.id !== 'minecraft:trial_key') {
        return;
    }

    // Only works at night
    const timeOfDay = level.getDayTime() % 24000;
    const isNight = (timeOfDay >= 13000 && timeOfDay <= 23000);
    if (!isNight) {
        player.tell(Text.red('This can only be activated at night.'));
        return;
    }

    const getId = (dx, dy, dz) => level.getBlock(x + dx, y + dy, z + dz).id;

    // Side and corner positions relative to the chest
    const sideOffsets = [
        [0, -1, -1],
        [0, -1, 1],
        [-1, -1, 0],
        [1, -1, 0],
    ];
    const cornerOffsets = [
        [-1, -1, -1],
        [-1, -1, 1],
        [1, -1, -1],
        [1, -1, 1],
    ];

    // Center under chest must be copper block
    const centerValid = getId(0, -1, 0) === 'minecraft:copper_block';

    // Sides must be chiseled copper
    const sidesValid = sideOffsets.every(([dx, dy, dz]) =>
        getId(dx, dy, dz) === 'minecraft:chiseled_copper'
    );

    // Corners must all be tuff bricks
    const cornersValid = cornerOffsets.every(([dx, dy, dz]) =>
        getId(dx, dy, dz) === 'minecraft:tuff_bricks'
    );

    if (!centerValid || !sidesValid || !cornersValid) {
        player.tell(Text.red('Incorrect structure.'));
        return;
    }

    // Always set to Trial Vault spawner
    const command = `setblock ${x} ${y} ${z} minecraft:vault replace`;
    server.runCommandSilent(command);

    // Consume the Trial Key
    player.mainHandItem.count--;
    player.tell(Text.green(`Trial spawner set for Trial Vault!`));
});
