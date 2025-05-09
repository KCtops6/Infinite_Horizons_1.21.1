BlockEvents.leftClicked(event => {
    const { block, item, player } = event;
    if (block.id === 'minecraft:nether_portal' && item.id === 'create:empty_blaze_burner') {
        player.mainHandItem = Item.of('create:blaze_burner');
        player.tell(Text.gold('The burner roars to life!'));
    }
});
