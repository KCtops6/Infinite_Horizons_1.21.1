BlockEvents.rightClicked('kubejs:dormant_trial_spawner', event => {
    const { item, level, player, server, block } = event;
    const { x, y, z } = block;
    const TRIAL_CONFIG = {
        'minecraft:chiseled_tuff': { mob: 'breeze' },
        'minecraft:nether_bricks': { mob: 'blaze' },
        'minecraft:moss_block': { mob: 'slime' },
        'minecraft:chiseled_sandstone': { mob: 'husk' },
        'minecraft:stone_bricks': { mob: 'silverfish' },
        'minecraft:packed_ice': { mob: 'stray' },
        'minecraft:chiseled_polished_blackstone': { 
            mob: 'piglin',
            ominousMob: 'piglin_brute'
        },
        'minecraft:soul_soil': { mob: 'ghast' },
        'minecraft:dark_oak_log': {
            mob: 'pillager',
            ominousMob: 'ravager'
        },
        'minecraft:emerald_block': { 
            mob: 'vindicator', 
            ominousMob: 'minecraft:evoker'
        },
        'minecraft:mycelium': { mob: 'bogged' },
        'minecraft:oak_planks': { mob: 'cave_spider' },
        'minecraft:grass_block': { mob: 'creeper' },
        'minecraft:gravel': { mob: 'drowned' },
        'minecraft:dark_prismarine': {
            mob: 'guardian',
            ominousMob: 'elder_guardian'
        },
        'minecraft:end_stone': { mob: 'enderman' },
        'minecraft:crimson_nylium': { mob: 'hoglin' },
        'minecraft:magma_block': { mob: 'magma_cube' },
        'minecraft:lime_wool': { mob: 'phantom' },
        'minecraft:purpur_block': { mob: 'shulker' },
        'minecraft:bone_block': { mob: 'skeleton' },
        'minecraft:white_wool': { mob: 'spider' },
        'minecraft:sculk': { ominousMob: 'warden' },
        'minecraft:spruce_planks': { mob: 'witch' },
        'minecraft:coal_block': { mob: 'wither_skeleton'},
        'minecraft:mossy_cobblestone': { mob: 'zombie' }
    };
    if (item.id !== 'kubejs:trial_core') return;
    const TIME = level.getDayTime() % 24000;
    if (TIME < 13000 || TIME > 23000) {
        player.displayClientMessage(Text.red('The core remains cold. It needs moonlight.'), true);
        return;
    }
    const getBlock = (dx, dy, dz) => level.getBlock(x + dx, y + dy, z + dz).id;
    const isBaseValid = getBlock(0, -1, 0) === 'minecraft:copper_block' &&
        [[0, -1, -1], [0, -1, 1], [-1, -1, 0], [1, -1, 0]].every(([dx, dy, dz]) => 
            getBlock(dx, dy, dz) === 'minecraft:chiseled_copper'
        );
    if (!isBaseValid) {
        level.spawnParticles('minecraft:smoke', true, x + 0.5, y, z + 0.5, 0.2, 0.2, 0.2, 5, 0.05);
        player.displayClientMessage(Text.red('The copper foundation is incorrect.'), true);
        return;
    }
    const corners = [[-1, -1, -1], [-1, -1, 1], [1, -1, -1], [1, -1, 1]].map(([dx, dy, dz]) => getBlock(dx, dy, dz));
    const trial = TRIAL_CONFIG[corners[0]];
    if (!corners.every(id => id === corners[0]) || !trial) {
        player.displayClientMessage(Text.red('The corner ritual blocks are mismatched or invalid.'), true);
        return;
    }
    const hasOminous = player.potionEffects.isActive('minecraft:trial_omen');
    let targetMob = `minecraft:${trial.mob}`;
    if (hasOminous && trial.ominousMob) {
        targetMob = trial.ominousMob;
    }
    const nbt = {
        trial_spawner_state: "active",
        ominous: hasOminous,
        target_cooldown_length: 6000,
        normal_config: {
            spawn_potentials: [{
                data: { entity: { id: targetMob } },
                weight: 1
            }]
        },
        LootTable: hasOminous ? "minecraft:trials/ominous/trial_spawner" : "minecraft:trials/trial_spawner"
    };
    server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:trial_spawner${JSON.stringify(nbt)} replace`);
    level.playSound(null, x, y, z, 'block.trial_spawner.detect_player', 'blocks', 1.0, 1.0);
    level.spawnParticles('minecraft:soul_fire_flame', true, x + 0.5, y + 0.5, z + 0.5, 0.5, 0.5, 0.5, 50, 0.1);
    item.count--;
    player.displayClientMessage(Text.gold(`The ritual is complete. Face the ${trial.mob}!`), true);
});