StartupEvents.registry("block", (event) => {
    const formatName = (id) => {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    const blocks = [
        'aluminum', 'lead', 'silver', 'nickel', 'uranium'
    ]

    blocks.forEach(b => {
        let name = `block_of_raw_${b}`
        event.create(name)
        .displayName(formatName(name)).hardness(5)
        .resistance(6)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
    })
})