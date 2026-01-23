ServerEvents.recipes(event => {
    event.shaped(Item.of('create:andesite_funnel', 3), [
        ' A ',
        ' R ',
        '   '
    ], {
        A: 'create:andesite_alloy',
        R: 'kubejs:rubber_sheet'
    });
});