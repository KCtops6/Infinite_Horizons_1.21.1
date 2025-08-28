BlockEvents.rightClicked('kubejs:tree_tap', event => {
    const { block, item, player } = event;
    if (block.id === 'minecraft:birch_log' || block.id === 'minecraft:birch_wood' || block.id === 'minecraft:jungle_log' || block.id === 'minecraft:jungle_wood') {
        let count = item.count
        let damage = item.getDamage()
        if (damage + 1 >= item.getMaxDamage()) {
            player.sendMessage('Your Tree Tap has broken!');
            player.setHeldItem(event.hand, Item.of('minecraft:air'));
        } else {
            item.damage(1);
            player.give(Item.of('kubejs:tree_sap'));
            event.block.set('kubejs:charred_' + block.id.split(':')[1]);
            player.swingArm(event.hand);
            event.cancel();
        }
    }
});