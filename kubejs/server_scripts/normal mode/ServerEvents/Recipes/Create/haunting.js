ServerEvents.recipes(event => {
    // soulstone
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:blackstone" }],
        results: [{ id: "mysticalagriculture:soulstone" }]
    }).id('create:haunting/soulstone');
    // end stone
    event.custom({
        type: "create:haunting",
        ingredients: [{ item: "minecraft:netherrack" }],
        results: [{ id: "minecraft:end_stone" }]
    }).id('create:haunting/end_stone');
});