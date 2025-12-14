ServerEvents.recipes(event => {
    event.custom({
        type: "create:haunting",
        ingredients: [
            {
                item: "minecraft:blackstone"
            }
        ],
        results: [
            {
                id: "mysticalagriculture:soulstone"
            }
        ]
    }).id('create/haunting/soulstone');
});