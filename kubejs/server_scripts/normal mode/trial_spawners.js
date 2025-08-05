BlockEvents.rightClicked('minecraft:copper_grate', event => {
    const { item, level, player, server } = event;
    const { x, y, z } = event.block;
    if (item.id !== 'minecraft:trial_key') {
        player.tell(Text.red('You need to hold a Trial Key.'));
        return;
    }
    const getId = (dx, dy, dz) => level.getBlock(x + dx, y + dy, z + dz).id;
    const cornerTypes = {
        'minecraft:chiseled_tuff': 'breeze',
        'minecraft:nether_bricks': 'blaze',
        'minecraft:mossy_cobblestone': 'zombie',
        'minecraft:moss_block': 'slime',
        'minecraft:chiseled_sandstone': 'husk',
        'minecraft:stone_bricks': 'silverfish',
        'minecraft:packed_ice': 'stray',
        'minecraft:bone_block': 'skeleton',
        'minecraft:chiseled_polished_blackstone': 'piglin',
        'minecraft:gilded_blackstone': 'piglin_brute',
        'minecraft:crimson_nylium': 'hoglin',
        'minecraft:soul_soil': 'ghast',
        'minecraft:purpur_block': 'shulker',
    };

    const spawnEggs = {
        'breeze': 'minecraft:breeze_spawn_egg',
        'blaze': 'minecraft:blaze_spawn_egg',
        'zombie': 'minecraft:zombie_spawn_egg',
        'slime': 'minecraft:slime_spawn_egg',
        'husk': 'minecraft:husk_spawn_egg',
        'silverfish': 'minecraft:silverfish_spawn_egg',
        'stray': 'minecraft:stray_spawn_egg',
        'skeleton': 'minecraft:skeleton_spawn_egg',
        'piglin': 'minecraft:piglin_spawn_egg',
        'hoglin': 'minecraft:hoglin_spawn_egg',
        'ghast': 'minecraft:ghast_spawn_egg',
        'shulker': 'minecraft:shulker_spawn_egg',
        'piglin_brute': 'minecraft:piglin_brute_spawn_egg'
    };

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
    const centerValid = getId(0, -1, 0) === 'minecraft:copper_block';
    const sidesValid = sideOffsets.every(([dx, dy, dz]) =>
        getId(dx, dy, dz) === 'minecraft:chiseled_copper'
    );
    if (!centerValid || !sidesValid) {
        player.tell(Text.red('Incorrect structure.'));
        return;
    }
    const cornerIds = cornerOffsets.map(([dx, dy, dz]) => getId(dx, dy, dz));
    const firstCorner = cornerIds[0];
    const uniformCorners = cornerIds.every(id => id === firstCorner);
    if (!uniformCorners) {
        player.tell(Text.red('All corner blocks must match.'));
        return;
    }
    const trialName = cornerTypes[firstCorner];
    if (!trialName) {
        player.tell(Text.red('Invalid corner block for trial.'));
        return;
    }
    const spawnEggId = spawnEggs[trialName];
    if (!spawnEggId) {
        player.tell(Text.red('No spawn egg defined for this trial.'));
        return;
    }
    event.block.set('minecraft:trial_spawner');
    player.mainHandItem.count--;
    player.give(Item.of(spawnEggId));
    player.tell(Text.green(`You received a ${trialName} spawn egg! Right-click a Trial Chamber to activate.`));
});

BlockEvents.rightClicked('minecraft:vault', event => {
    event.block.set('minecraft:air')
    event.block.set('minecraft:vault')
})

