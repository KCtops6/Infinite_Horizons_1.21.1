ServerEvents.recipes(event => {
    event.remove({ type: 'createsifter:sifting' })  // remove all sifting recipes.
    const materials = ['copper', 'electrum', 'aluminum', 'steel', 'lead']   // immersive engineering wire materials.
    materials.forEach(material => {
        event.remove({ id: `immersiveengineering:metalpress/wire_${material}` })    // remove each matalpress recipe for that wire.
    })
})