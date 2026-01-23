/**
 * All villager trade modifications should go in this file.
 */
MoreJS.villagerTrades(event => {
    /**
     * Add a trade to the farmer that sells animal feed for 2-5 emeralds.
     * Animals: cow, pig, sheep, chicken, rabbit, horse
     * Feed items: cow_feed, pig_feed, sheep_feed, chicken_feed, rabbit_feed, horse_feed
     */
    let animals = ["cow", "pig", "sheep", "chicken", "rabbit", "horse"];    // List of animals
    animals.forEach(animal => { // Loop through each animal
        event.addTrade(`minecraft:farmer`, 1, // Add trade to level 1 of the respective farmer
            TradeItem.of("minecraft:emerald", 2, 5),    // Cost: 2-5 emeralds
            `kubejs:${animal}_feed`,    // Item sold: respective animal feed
        )
    });
});