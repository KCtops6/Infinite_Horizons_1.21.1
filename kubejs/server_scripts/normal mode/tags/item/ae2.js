ServerEvents.tags('item', event => {
    const storage_sizes = [ '1', '4', '16', '64', '256' ];  // each storage size.

    storage_sizes.forEach(s => {    // for each storage size...
        event.add('kubejs:item_storage_cells', `ae2:item_storage_cell_${s}k`);  // add that size item storage cell to the new item storage cell tag.
        event.add('kubejs:fluid_storage_cells', `ae2:fluid_storage_cell_${s}k`);    // add that size fluid storage cell to the new fluid storage cell tag.  
        event.add('kubejs:crafting_storages', `ae2:${s}k_crafting_storage`);    // add that size crafting storage to the new crafting storage tag.
    });
})