//ignored: false
//requires: immersiveengineering

/**
 * Remove Immersive Engineering wire metal press recipes and re-add them with tags.
 * This allows for more mod compatibility by allowing any mod's ingot of the specified material to be used.
 * Each wire press recipe produces 4 wires from 1 ingot.
 */
ServerEvents.recipes(event => {
    const materials = ['copper', 'electrum', 'aluminum', 'steel', 'lead']
    materials.forEach(material => {
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: 2400,
            input: {
                tag: `c:ingots/${material}`
            },
            mold: "immersiveengineering:mold_wire",
            result: {
                basePredicate: {
                    tag: `c:wires/${material}`
                },
                count: 4
            }
        })
    })
})