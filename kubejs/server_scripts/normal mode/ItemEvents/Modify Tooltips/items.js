let mapping = {
    "create:blaze_burner": "Obtained by left clicking an empty Blaze Burner on a lit Nether portal",
    "kubejs:chicken_feed": "Used on a Grass Block to summon a Chicken",
    "kubejs:cow_feed": "Used on a Grass Block to summon a Cow",
    "kubejs:pig_feed": "Used on a Grass Block to summon a Pig",
    "kubejs:sheep_feed": "Used on a Grass Block to summon a Sheep",
    "kubejs:rabbit_feed": "Used on a Grass Block to summon a Rabbit",
    "kubejs:horse_feed": "Used on a Grass Block to summon a Horse",
    "minecraft:trial_spawner": ""
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
    event.modify("minecraft:trial_key", { shift: true }, text => {
        text.insert(1, Text.join([
            Text.green("Used to create "),
            Text.green("Trial Spawners").bold(),
            Text.green(".")
        ]))
        text.insert(2, Text.join([
            Text.green("Right click on a "),
            Text.green("Copper Grate").bold(),
            Text.green(".")
        ]))
        text.insert(3, Text.green("Transformation must happen at night."))
    })
    let cornerTypes = {
        'minecraft:chiseled_tuff': 'Breeze',
        'minecraft:nether_bricks': 'Blaze',
        'minecraft:moss_block': 'Slime',
        'minecraft:chiseled_sandstone': 'Husk',
        'minecraft:stone_bricks': 'Silverfish',
        'minecraft:packed_ice': 'Stray',
        'minecraft:chiseled_polished_blackstone': 'Piglin',
        'minecraft:soul_soil': 'Ghast',
        'minecraft:dark_oak_log': 'Pillager',
        'minecraft:emerald_block': 'Vindicator'
    }
    Object.entries(cornerTypes).forEach(([blockID, mob]) => {
        event.modify(blockID, { ctrl: false }, text => {
            text.insert(1, Text.join([
                Text.yellow("Press ").italic(),
                Text.gold("Ctrl").bold(),
                Text.yellow(" for more info...").italic()
            ]))
        })

        event.modify(blockID, { ctrl: true }, text => {
            text.insert(1, Text.join([
                Text.green("A part of a structure for the "),
                Text.darkGreen(mob).bold(),
                Text.green(" trial chamber.")
            ]))
        })
    })
})
