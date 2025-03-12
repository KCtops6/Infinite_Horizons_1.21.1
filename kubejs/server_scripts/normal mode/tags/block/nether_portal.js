ServerEvents.tags('block', event => {
    // Remove obsidian from being a valid portal frame
    event.remove('minecraft:portal_frame', 'minecraft:obsidian')
});

BlockEvents.placed(event => {
    if (event.block.id === 'minecraft:nether_portal') {
        event.block.set('minecraft:air') // Replace with air to prevent portal formation
    }
});

EntityEvents.spawned(event => {
    if (event.entity.type == 'minecraft:portal') {
        event.cancel() // Prevent the portal entity from spawning
    }
});