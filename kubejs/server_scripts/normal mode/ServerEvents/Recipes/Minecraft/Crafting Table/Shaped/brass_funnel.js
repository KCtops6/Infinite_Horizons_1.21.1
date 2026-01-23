ServerEvents.recipes(event => {
    event.shaped(Item.of('create:brass_funnel', 3), [
        ' E ',
        ' B ',
        ' R '
    ], {
        E: 'create:electron_tube',
        B: 'kubejs:brass_ingot',
        R: 'kubejs:rubber_sheet'
    }).id('create:crafting/brass_funnel');
});