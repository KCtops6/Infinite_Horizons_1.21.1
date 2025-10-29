ServerEvents.recipes(event => {
    event.shaped(Item.of('forester_villager:foresters_table', 1), [
        'LAL',
        'PPP',
        'GGG'
    ], {
        L: 'minecraft:leather',
        A: 'minecraft:iron_axe',
        P: '#minecraft:planks',
        G: '#minecraft:logs'
    });
});