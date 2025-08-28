ServerEvents.tags('item', event => {
    let types = ['stone', 'andesite', 'deepslate', 'diorite', 'granite'];
    types.forEach(type => {
        event.add(`infinitehorizons:pebbles`, `kubejs:${type}_pebble`);
    })
});