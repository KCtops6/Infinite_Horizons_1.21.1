StartupEvents.registry('block', event => {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    global.blocks.forEach(block => {
        event.create(`${block}_block`)
            .displayName(`${capitalize(block)} Block`)
            .soundType('metal')
            .hardness(5.0)
            .resistance(6.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool');
    });
});

