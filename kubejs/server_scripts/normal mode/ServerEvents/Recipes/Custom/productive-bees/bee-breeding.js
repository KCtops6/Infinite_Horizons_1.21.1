ServerEvents.recipes(event => {
    event.custom({
        type: "productivebees:bee_breeding",
        parent1: "productivebees:water",
        parent2: "productivebees:gold",
        offspring: "productivebees:prismarine"
    });
    event.custom({
        type: "productivebees:bee_breeding",
        parent1: "productivebees:water",
        parent2: "productivebees:prismarine",
        offspring: "productivebees:sponge"
    });
});