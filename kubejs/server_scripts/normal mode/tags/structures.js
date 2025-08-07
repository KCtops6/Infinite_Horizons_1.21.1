ServerEvents.tags("worldgen/biome", event => {
    // Remove all existing biomes that can spawn strongholds
    event.removeAll("minecraft:has_structure/stronghold");

    // Add Nether biomes so strongholds can spawn in the Nether
    event.add("minecraft:has_structure/stronghold", [
        "minecraft:nether_wastes",
        "minecraft:warped_forest",
        "minecraft:crimson_forest",
        "minecraft:soul_sand_valley"
    ]);
});