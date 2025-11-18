let mapping = {
    "create:blaze_burner": "Obtained by left clicking an empty Blaze Burner on a lit Nether portal",
    "kubejs:chicken_feed": "Used on a Grass Block to summon a Chicken",
    "kubejs:cow_feed": "Used on a Grass Block to summon a Cow",
    "kubejs:pig_feed": "Used on a Grass Block to summon a Pig",
    "kubejs:sheep_feed": "Used on a Grass Block to summon a Sheep",
    "kubejs:rabbit_feed": "Used on a Grass Block to summon a Rabbit",
    "kubejs:horse_feed": "Used on a Grass Block to summon a Horse"
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
