//ingored: false
ServerEvents.tags('item', event => {
    global.raw_ore_blocks.forEach(b => {
        event.add(`c:storage_blocks/raw_${b}`)
    })
})