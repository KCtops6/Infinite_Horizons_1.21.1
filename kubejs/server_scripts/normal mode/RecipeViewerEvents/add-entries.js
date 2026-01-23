RecipeViewerEvents.addEntries('item', event => {
    global.raw_ores.forEach(i => {
        event.add(`create:crushed_raw_${i}`);
    });
});