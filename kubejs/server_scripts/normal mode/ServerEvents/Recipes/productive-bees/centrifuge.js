ServerEvents.recipes(event => {
    event.custom({
        type: "productivebees:centrifuge",
        ingredient: {
            type: "productivebees:component",
            components: {
                "productivebees:bee_type": "productivebees:experience"
            },
            items: "productivebees:configurable_honeycomb"
        },
        outputs: [
            {
                item: {
                    item: "create:experience_nugget"
                },
                chance: 0.5
            },
            {
                item: {
                    item: "productivebees:wax"
                }
            }
        ]
    });
});