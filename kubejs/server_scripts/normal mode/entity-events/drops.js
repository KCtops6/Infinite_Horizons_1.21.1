const OVERWORLD_MOBS = [
    'minecraft:zombie', 
    'minecraft:skeleton', 
    'minecraft:creeper', 
    'minecraft:enderman', 
    'minecraft:spider'
];
EntityEvents.drops(event => {
    if (event.source.player && OVERWORLD_MOBS.includes(event.entity.type) && Math.random() < 0.05) {
        event.addDrop('kubejs:trial_core');
    }
});