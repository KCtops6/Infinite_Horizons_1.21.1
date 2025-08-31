ServerEvents.recipes(event => {
    let mesh_types = ['copper', 'iron'];
    mesh_types.forEach((type) => {
        event.shaped(Item.of(`kubejs:${type}_mesh`), [
            'SSS',
            'SCS',
            'SSS'   
        ], {
            C: `createaddition:${type}_wire`,
            S: 'minecraft:stick'
        });
    });
});

