BlockEvents.rightClicked('kubejs:dormant_trial_spawner', event => { 
    const { item, level, player, server } = event;
    const { x, y, z } = event.block;
    const TIME_OF_DAY = level.getDayTime() % 24000;
    const IS_NIGHT = (TIME_OF_DAY >= 13000 && TIME_OF_DAY <= 23000);
    if (item.id !== 'kubejs:trial_core') {
        player.tell(Text.red('You need to hold a Trial Core.'));
        return;
    }
    if (!IS_NIGHT) {
        player.tell(Text.red('This can only be activated at night.'));
        return;
    }
    const GET_ID = (dx, dy, dz) => level.getBlock(x + dx, y + dy, z + dz).id;
    const CORNER_TYPES = {
        'minecraft:chiseled_tuff': 'breeze',
        'minecraft:nether_bricks': 'blaze',
        'minecraft:moss_block': 'slime',
        'minecraft:chiseled_sandstone': 'husk',
        'minecraft:stone_bricks': 'silverfish',
        'minecraft:packed_ice': 'stray',
        'minecraft:chiseled_polished_blackstone': 'piglin',
        'minecraft:soul_soil': 'ghast',
        'minecraft:dark_oak_log': 'pillager',
        'minecraft:emerald_block': 'vindicator'
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

    const centerValid = GET_ID(0, -1, 0) === 'minecraft:copper_block';
    const sidesValid = sideOffsets.every(([dx, dy, dz]) =>
        GET_ID(dx, dy, dz) === 'minecraft:chiseled_copper'
    );
    if (!centerValid || !sidesValid) {
        player.tell(Text.red('Incorrect structure.'));
        return;
    }

    const cornerIds = cornerOffsets.map(([dx, dy, dz]) => GET_ID(dx, dy, dz));
    const firstCorner = cornerIds[0];
    const uniformCorners = cornerIds.every(id => id === firstCorner);
    if (!uniformCorners) {
        player.tell(Text.red('All corner blocks must match.'));
        return;
    }

    const trialName = CORNER_TYPES[firstCorner];
    if (!trialName) {
        player.tell(Text.red('Invalid corner block for trial.'));
        return;
    }

    let command;

    // Special case for Vindicator -> Evoker
    if (trialName === 'vindicator') {
        command = `setblock ${x} ${y} ${z} trial_spawner[ominous=true,trial_spawner_state=active]{LootTable:"minecraft:trials/ominous/trial_spawner",normal_config:{spawn_potentials:[{data:{entity:{id:"minecraft:vindicator"}},weight:1}]},ominous_config:{spawn_potentials:[{data:{entity:{id:"minecraft:evoker"}},weight:1}]},target_cooldown_length:6000} replace`;
    } else {
        command = `setblock ${x} ${y} ${z} trial_spawner[ominous=true,trial_spawner_state=active]{LootTable:"minecraft:trials/ominous/trial_spawner",normal_config:{spawn_potentials:[{data:{entity:{id:"minecraft:${trialName}"}},weight:1}]},target_cooldown_length:6000} replace`;
    }
    server.runCommandSilent(command);
    player.mainHandItem.count--;
    player.tell(Text.green(`Trial spawner set for ${trialName}!`));
});
