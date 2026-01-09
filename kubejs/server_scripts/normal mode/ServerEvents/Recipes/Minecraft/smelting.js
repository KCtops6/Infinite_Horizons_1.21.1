ServerEvents.recipes(event => {
    event.smelting('kubejs:raw_rubber', 'kubejs:tree_sap').xp(0.1);
    global.ingots.forEach(ingot => {
        if (global.raw_ores.includes(ingot)) {
            event.smelting(`kubejs:${ingot}_ingot`, `kubejs:raw_${ingot}`).xp(0.7);
        } else if (global.dusts.includes(ingot)) {
            event.smelting(`kubejs:${ingot}_ingot`, `kubejs:${ingot}_dust`).xp(0.7);
        }
    });
    if (Platform.isLoaded('refinedstorage')) {
        event.smelting('refinedstorage:quartz_enriched_iron', 'kubejs:quartz_enriched_iron_dust');
        event.smelting('refinedstorage:quartz_enriched_copper', 'kubejs:quartz_enriched_copper_dust');
    }
});