const formatName = (id) => {
    return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

StartupEvents.registry('block', event => {
    let types = ['birch', 'jungle'];
    types.forEach(type => {
        let name = `scarred_${type}_wood`
        event.create(name)
            .displayName(formatName(name)).hardness(2)
            .mapColor("#8F7748")
            .resistance(3)
            .requiresTool(false)
            .tagBlock('mineable/axe')
            .tagItem('minecraft:logs')
            .woodSoundType();

        let name2 = `scarred_${type}_log`
        event.create(name2)
            .displayName(formatName(name2)).hardness(2)
            .mapColor("#8F7748")
            .resistance(3)
            .requiresTool(false)
            .tagBlock('mineable/axe')
            .tagItem('minecraft:logs')
            .woodSoundType();
    })
});