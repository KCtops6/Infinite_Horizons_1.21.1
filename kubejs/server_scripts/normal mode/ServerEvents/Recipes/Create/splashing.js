ServerEvents.recipes(event => {
    global.raw_ores.forEach(i => {
        let itemId = `create:crushed_raw_${i}`;
        if (Item.exists(itemId)) {
            event.custom({
                type: "create:splashing",
                ingredients: [
                    {
                        item: itemId
                    }
                ],
                results: [
                    {
                        count: 9,
                        id: `kubejs:${i}_nugget`
                    }
                ]
            }).id(`kubejs:create_splashing/${i}_nugget`);
        }
    });
});