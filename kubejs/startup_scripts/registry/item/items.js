StartupEvents.registry('item', e => {
    const items = [
        'stone_pebble', 'andesite_pebble', 'deepslate_pebble', 'diorite_pebble', 'granite_pebble',
        'bastion_key', 'fortress_key', 'ruined_portal_key'
    ];

    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    items.forEach(id => {
        e.create(id).displayName(formatName(id));
    });

    const glowingitems = [
        'nether_key', 'end_key'
    ];

    glowingitems.forEach(id => {
        e.create(id).displayName(formatName(id)).glow(true);
    });
});
