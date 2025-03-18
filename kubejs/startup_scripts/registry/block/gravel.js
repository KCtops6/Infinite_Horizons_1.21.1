StartupEvents.registry("block", (event) => {
    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

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
})