ServerEvents.tags('item', event => {
    const storage_sizes = [ '1', '4', '16', '64', '256' ];

    storage_sizes.forEach(s => {
        event.add('kubejs:item_storage_cells', `ae2:item_storage_cell_${s}k`);
        event.add('kubejs:fluid_storage_cells', `ae2:fluid_storage_cell_${s}k`);
        event.add('kubejs:crafting_storages', `ae2:${s}k_crafting_storage`);
    });
})