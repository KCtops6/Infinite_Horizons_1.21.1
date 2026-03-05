RecipeViewerEvents.addEntries('item', event => {
    global.raw_ores.forEach(i => {
        let itemId = `create:crushed_raw_${i}`;
        if (Item.exists(itemId)) {
            event.add(itemId);
        }
    });
});
