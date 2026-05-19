ServerEvents.recipes(event => {
    event.custom({
        type: "industrialforegoing:crusher",
        input: {
            item: "minecraft:andesite"
        },
        output: {
            item: "kubejs:andesite_gravel"
        }
    }).id('kubejs:industrialforegoing/crusher/kubejs/andesite_gravel');
    event.custom({
        type: "industrialforegoing:crusher",
        input: {
            item: "minecraft:diorite"
        },
        output: {
            item: "kubejs:diorite_gravel"
        }
    }).id('kubejs:industrialforegoing/crusher/kubejs/diorite_gravel');
    event.custom({
        type: "industrialforegoing:crusher",
        input: {
            item: "minecraft:granite"
        },
        output: {
            item: "kubejs:granite_gravel"
        }
    }).id('kubejs:industrialforegoing/crusher/kubejs/granite_gravel');
});