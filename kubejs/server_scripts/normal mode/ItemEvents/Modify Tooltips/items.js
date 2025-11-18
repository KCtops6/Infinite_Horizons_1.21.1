let mapping = {
    "create:blaze_burner": "Obtained by left clicking an empty Blaze Burner on a lit Nether portal"
}
ItemEvents.modifyTooltips(event => {
    Object.entries(mapping).forEach(([itemID, tooltipLine]) => {
        event.modify(itemID, { shift: false }, text => {
            text.insert(1, Text.join([
                Text.yellow("Press ").italic(),
                Text.gold("Shift").bold(),
                Text.yellow(" for more info...").italic()
            ]))
        })
        event.modify(itemID, { shift: true }, text => {
            text.insert(1, [
                Text.green(tooltipLine)
            ])
        })
    })
})
