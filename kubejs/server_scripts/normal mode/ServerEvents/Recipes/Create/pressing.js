ServerEvents.recipes(event => {
    global.plates.forEach(material => {
        event.custom({
            type: "create:pressing",
            ingredients: [
                {
                    tag: `c:ingots/${material}`
                }
            ],
            results: [
                {
                    id: `kubejs:${material}_plate`
                }
            ]
        }).id(`${material}_plate_from_ingot`);
    });
});