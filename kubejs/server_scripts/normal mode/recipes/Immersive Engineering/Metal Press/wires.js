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