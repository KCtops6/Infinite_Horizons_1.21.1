ItemEvents.modification(event => {
    event.modify('kubejs:sulfur_gem', item => {
        item.burnTime = 1600
    });
});