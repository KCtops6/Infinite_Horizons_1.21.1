ServerEvents.recipes(event => {
    event.shaped(Item.of('create:brass_tunnel', 3), [
        'E  ',
        'BB ',
        'RR '
    ], {
        E: 'create:electron_tube',
        B: 'kubejs:brass_ingot',
        R: 'kubejs:rubber_sheet'
    });
});