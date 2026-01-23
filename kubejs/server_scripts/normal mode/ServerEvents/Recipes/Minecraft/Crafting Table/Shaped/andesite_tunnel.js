ServerEvents.recipes(event => {
    event.shaped(Item.of('create:andesite_tunnel', 3), [
        'AA ',
        'RR ',
        '   '
    ], {
        A: 'create:andesite_alloy',
        R: 'kubejs:rubber_sheet'
    });
});