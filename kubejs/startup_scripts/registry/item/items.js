StartupEvents.registry('item', e => {
    const items = [
        'stone_pebble', 'andesite_pebble', 'deepslate_pebble', 'nether_key', 'end_key'
    ];

    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    items.forEach(id => {
        e.create(id).displayName(formatName(id));
    });

    const glowingitems = [
        'wither_controller', 'ender_controller', 'token_of_the_nether', 'token_of_the_end'
    ];

    glowingitems.forEach(id => {
        e.create(id).displayName(formatName(id)).glow(true);
    });
});
