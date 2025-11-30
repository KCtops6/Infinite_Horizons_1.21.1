ServerEvents.recipes(event => {
    event.shaped(Item.of('create:belt_connector', 2), [
        'RRR',
        'RRR',
        '   '
    ], {
        R: 'kubejs:rubber_sheet'
    });
});