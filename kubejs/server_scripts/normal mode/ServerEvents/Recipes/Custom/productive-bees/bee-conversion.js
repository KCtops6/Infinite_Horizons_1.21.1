ServerEvents.recipes(event => {
    event.custom({
        type: "productivebees:bee_conversion",
        source: "minecraft:bee",
        result: "productivebees:water",
        item: {
            item: "minecraft:water_bucket"
        }
    });
});