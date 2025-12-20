const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
StartupEvents.registry("block", (event) => {
    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
    global.raw_ore_blocks.forEach(b => {
        let name = `block_of_raw_${b}`
        event.create(name)
        .displayName(formatName(name)).hardness(5)
        .resistance(6)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
    })
    const blocks = [
        'tuff', 'deepslate', 'andesite', 'diorite', 'granite'
    ]
    blocks.forEach(b => {
        event.create(`${b}_gravel`)
        .displayName(formatName(`${b}_gravel`)).hardness(0.6)
        .resistance(0.6)
        .gravelSoundType()
        .requiresTool(false)
        .tagBlock("mineable/shovel")
    })
    global.blocks.forEach(block => {
        event.create(`${block}_block`)
            .displayName(`${capitalize(block)} Block`)
            .soundType('metal')
            .hardness(5.0)
            .resistance(6.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_iron_tool')
    })
    event.create('dormant_trial_spawner')
        .displayName('Dormant Trial Spawner')
        .mapColor('stone')
        .soundType('metal')
        .hardness(5.0)
        .resistance(10.0)
        .opaque(true)
        .fullBlock(true);
});