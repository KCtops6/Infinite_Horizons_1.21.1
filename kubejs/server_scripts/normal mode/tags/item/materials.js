//ignored: false
ServerEvents.tags('item', event => {
    global.blocks.forEach(block => {
        event.add(`c:storage_blocks/${block}`, `kubejs:${block}_block`);
    });

    global.raw_ores.forEach(r => {
        event.add(`c:raw_materials/${r}`, `kubejs:raw_${r}`);
    });

    global.plates.forEach(plate => {
        event.add(`c:plates/${plate}`, `kubejs:${plate}_plate`);
    });

    global.nuggets.forEach(nugget => {
        event.add(`c:nuggets/${nugget}`, `kubejs:${nugget}_nugget`);
    });

    global.ingots.forEach(ingot => {
        event.add(`c:ingots/${ingot}`, `kubejs:${ingot}_ingot`);
    });

    global.gems.forEach(gem => {
        event.add(`c:gems/${gem}`, `kubejs:${gem}_gem`);
    });

    global.gears.forEach(gears => {
        event.add(`c:gears/${gears}`, `kubejs:${gears}_gear`);
    });

    global.dusts.forEach(dust => {
        event.add(`c:dusts/${dust}`, `kubejs:${dust}_dust`);
    });

    global.blocks.forEach(block => {
        event.add(`c:storage_blocks/${block}`, `kubejs:${block}_block`);
    });

    global.raw_ore_blocks.forEach(b => {
        event.add(`c:storage_blocks/raw_${b}`, `kubejs:block_of_raw_${b}`)
    })

    event.remove('c:coal_coke', 'immersiveengineering:coal_coke');
    event.add('c:coal_coke', 'kubejs:coal_coke');
})