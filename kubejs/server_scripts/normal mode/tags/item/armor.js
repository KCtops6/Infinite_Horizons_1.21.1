ServerEvents.tags('item', event => {
    const materials = ['chainmail', 'iron', 'diamond'];
    const pieces = ['helmet', 'chestplate', 'leggings', 'boots']

    materials.forEach(m => {
        pieces.forEach(p => {
            event.add(`c:armors/${m}`, `minecraft:${m}_${p}`)
        })
    });
})