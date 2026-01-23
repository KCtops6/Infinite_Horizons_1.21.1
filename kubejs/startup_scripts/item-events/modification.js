ItemEvents.modification(event => {
    event.modify('kubejs:sulfur_gem', item => {
        item.burnTime = 1600
    });
    event.modify('kubejs:sulfur_block', item => {
        item.burnTime = 1600 * 9
    });
});