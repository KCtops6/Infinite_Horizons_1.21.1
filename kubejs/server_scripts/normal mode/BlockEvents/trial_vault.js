BlockEvents.rightClicked('minecraft:chest', event => { 
    const { item, level, player, server } = event;
    const { x, y, z } = event.block;
    if (item.id !== 'kubejs:trial_core') return;
    const timeOfDay = level.getDayTime() % 24000;
    const isNight = (timeOfDay >= 13000 && timeOfDay <= 23000);
    if (!isNight) {
        player.tell(Text.red('The transfer only stirs in the darkness of night.'));
        return;
    }
    const getId = (dx, dy, dz) => level.getBlock(x + dx, y + dy, z + dz).id;
    const sideOffsets = [[0, -1, -1], [0, -1, 1], [-1, -1, 0], [1, -1, 0]];
    const cornerOffsets = [[-1, -1, -1], [-1, -1, 1], [1, -1, -1], [1, -1, 1]];
    const centerValid = getId(0, -1, 0) === 'minecraft:copper_block';
    const sidesValid = sideOffsets.every(([dx, dy, dz]) => getId(dx, dy, dz) === 'minecraft:chiseled_copper');
    const cornersValid = cornerOffsets.every(([dx, dy, dz]) => getId(dx, dy, dz) === 'minecraft:tuff_bricks');
    if (!centerValid || !sidesValid || !cornersValid) {
        player.tell(Text.red('The copper foundation is incomplete.'));
        return;
    }
    const hasOminous = player.potionEffects.isActive('minecraft:trial_omen');
    let setBlockCommand = `setblock ${x} ${y} ${z} minecraft:vault[ominous=${hasOminous}] replace`;
    server.runCommandSilent(setBlockCommand);
    item.count--;
    level.spawnParticles('minecraft:trial_spawner_detection', true, x + 0.5, y + 0.5, z + 0.5, 0.5, 0.5, 0.5, 20, 0.1);
    player.tell(Text.green(`The chest warps into a ${hasOminous ? '§5Ominous ' : ''}Trial Vault!`));
    event.cancel();
});