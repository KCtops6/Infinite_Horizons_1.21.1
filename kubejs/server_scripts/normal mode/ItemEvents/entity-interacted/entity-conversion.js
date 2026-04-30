ItemEvents.entityInteracted('irons_spellbooks:arcane_essence', event => {
    const { target, player, level, item } = event;
    if (level.isClientSide()) return;
    let newType = null;
    if (target.type == 'minecraft:piglin') {
        newType = 'irons_spellbooks:apothecarist';
    } else if (target.type == 'minecraft:villager') {
        let wizards = ['irons_spellbooks:priest', 'irons_spellbooks:cryomancer', 'irons_spellbooks:pyromancer'];
        newType = wizards[Math.floor(Math.random() * wizards.length)];
    }
    if (newType) {
        level.spawnParticles('minecraft:enchant', true, target.x, target.y + 1, target.z, 0.5, 1.0, 0.5, 100, 0.2);
        level.spawnParticles('minecraft:poof', true, target.x, target.y + 1, target.z, 0.2, 0.2, 0.2, 10, 0.05);
        target.playSound('minecraft:entity.evoker.prepare_summon');
        let newEntity = level.createEntity(newType);
        newEntity.setPosition(target.x, target.y, target.z);
        newEntity.setRotation(target.yaw, target.pitch);

        target.discard();
        newEntity.spawn();
        if (!player.isCreative()) {
            item.count--;
        }
        event.cancel();
    }
});