ServerEvents.recipes(event => {
    global.raw_ores.forEach(i => {
        event.custom({
            type: "create:splashing",
            ingredients: [
                {
                    item: `create:crushed_raw_${i}`
                }
            ],
            results: [
                {
                    count: 9,
                    id: `kubejs:${i}_nugget`
                }
            ]
        }).id(`kubejs:create_splashing/${i}_nugget`);
    });
});