const SHIFT_HINT = Text.join([
    Text.yellow("Press ").italic(),
    Text.gold("Shift").bold(),
    Text.yellow(" for more info...").italic()
]);
const CTRL_HINT = Text.join([
    Text.yellow("Press ").italic(),
    Text.gold("Ctrl").bold(),
    Text.yellow(" for more info...").italic()
]);
function addShiftTooltip(event, itemId, lines) {
    event.modify(itemId, { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify(itemId, { shift: true }, tooltip => {
        lines.forEach((line, index) => {
            tooltip.insert(1 + index, Text.green(line));
        });
    });
}
function addCtrlTooltip(event, itemId, lineBuilder) {
    event.modify(itemId, { ctrl: false }, tooltip => {
        tooltip.insert(1, CTRL_HINT);
    });
    event.modify(itemId, { ctrl: true }, tooltip => {
        tooltip.insert(1, lineBuilder());
    });
}
const SIMPLE_TOOLTIPS = {
    "create:blaze_burner": "Obtained by left clicking an empty Blaze Burner on a lit Nether portal",
    "kubejs:chicken_feed": "Used on a Grass Block to summon a Chicken",
    "kubejs:cow_feed": "Used on a Grass Block to summon a Cow",
    "kubejs:pig_feed": "Used on a Grass Block to summon a Pig",
    "kubejs:sheep_feed": "Used on a Grass Block to summon a Sheep",
    "kubejs:rabbit_feed": "Used on a Grass Block to summon a Rabbit",
    "kubejs:horse_feed": "Used on a Grass Block to summon a Horse",
    "kubejs:stone_pebble": "Obtained from sifting dirt or using trowels.",
    "kubejs:andesite_pebble": "Obtained from sifting dirt or using trowels.",
    "kubejs:diorite_pebble": "Obtained from sifting dirt or using trowels.",
    "kubejs:granite_pebble": "Obtained from sifting dirt or using trowels.",
    "kubejs:deepslate_pebble": "Obtained from sifting dirt or using trowels.",
    "minecraft:pumpkin_seeds": "Can be sifted from dirt.",
    "minecraft:melon_seeds": "Can be sifted from dirt.",
    "farmersdelight:wild_rice": "Can be sifted from dirt.",
    "mysticalagriculture:inferium_essence": "Obtained from mob drops or seeds.",
    "mysticalagriculture:inferium_seeds": "Grows Inferium Essence",
    "mysticalagriculture:inferium_farmland": "Increases resource yields and bonus seed drops",
    "mysticalagriculture:prosperity_gemstone": "Important crafting component"
};
const TRIAL_CORNER_BLOCKS = {
  "minecraft:chiseled_tuff": "Breeze",
  "minecraft:nether_bricks": "Blaze",
  "minecraft:moss_block": "Slime",
  "minecraft:chiseled_sandstone": "Husk",
  "minecraft:stone_bricks": "Silverfish",
  "minecraft:packed_ice": "Stray",
  "minecraft:chiseled_polished_blackstone": "Piglin",
  "minecraft:soul_soil": "Ghast",
  "minecraft:dark_oak_log": "Pillager",
  "minecraft:emerald_block": "Vindicator"
};
const AE2_CABLE_VARIANTS = [
  "smart",
  "covered",
  "glass",
  "covered_dense",
  "smart_dense"
];
ItemEvents.modifyTooltips(event => {
    Object.entries(SIMPLE_TOOLTIPS).forEach(([itemId, line]) => {
        addShiftTooltip(event, itemId, [line]);
    });
    event.modify("minecraft:trial_key", { shift: true }, tooltip => {
        tooltip.insert(1, Text.join([
            Text.green("Used to create "),
            Text.green("Trial Spawners").bold(),
            Text.green(".")
        ]));
        tooltip.insert(2, Text.join([
            Text.green("Right click on a "),
            Text.green("Copper Grate").bold(),
            Text.green(".")
        ]));
        tooltip.insert(3, Text.green("Transformation must happen at night."));
    });
    Object.entries(TRIAL_CORNER_BLOCKS).forEach(([blockId, mob]) => {
        addCtrlTooltip(event, blockId, () =>
            Text.join([
                Text.green("A part of a structure for the "),
                Text.darkGreen(mob).bold(),
                Text.green(" trial chamber.")
            ])
        );
    });

    AE2_CABLE_VARIANTS.forEach(variant => {
        const itemId = `ae2:fluix_${variant}_cable`;
        addShiftTooltip(event, itemId, ["You are able to dye these cables."]);
    });

    /**
     * Sifting
     */

    event.modify('minecraft:coal', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:coal', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold())
            .append(Text.darkAqua(' or '))
            .append(Text.aqua('Deepslate').bold())
            .append(Text.darkAqua('.')));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple(' for either gravel or deepslate.')));
    });
    event.modify('minecraft:raw_iron', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:raw_iron', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold())
            .append(Text.darkAqua(' or '))
            .append(Text.aqua('Deepslate').bold())
            .append(Text.darkAqua('.')));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple(' for gravel and a '))
            .append(Text.lightPurple('Brass Mesh').bold())
            .append(Text.darkPurple(' for deepslate.')));
    });
    event.modify('minecraft:raw_copper', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:raw_copper', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold())
            .append(Text.darkAqua(' or '))
            .append(Text.aqua('Deepslate').bold())
            .append(Text.darkAqua('.')));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple(' for gravel and a '))
            .append(Text.lightPurple('Netherite Mesh').bold())
            .append(Text.darkPurple(' for deepslate.')));
    });
    event.modify('create:raw_zinc', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('create:raw_zinc', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold()));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple('.')));
    });
    event.modify('kubejs:raw_tin', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('kubejs:raw_tin', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold()));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple('.')));
    });
    event.modify('minecraft:lapis_lazuli', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:lapis_lazuli', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold())
            .append(Text.darkAqua(' or '))
            .append(Text.aqua('Deepslate').bold())
            .append(Text.darkAqua('.')));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Brass Mesh').bold())
            .append(Text.darkPurple(' for gravel and a '))
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple(' for deepslate.')));
    });
    event.modify('minecraft:emerald', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:emerald', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold()));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Brass Mesh').bold())
            .append(Text.darkPurple('.')));
    });
    event.modify('minecraft:raw_gold', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:raw_gold', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold())
            .append(Text.darkAqua(', '))
            .append(Text.aqua('Deepslate').bold())
            .append(Text.darkAqua(' or '))
            .append(Text.red('Crushed Netherrack').bold())
            .append(Text.darkAqua('.')));
        tooltip.insert(2, Text.darkPurple('You need at least a ')
            .append(Text.lightPurple('Brass Mesh').bold())
            .append(Text.darkPurple(' for gravel, but only an '))
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple(' for deepslate or netherrack.')));
    });

    event.modify('minecraft:redstone', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:redstone', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Gravel').bold())
            .append(Text.darkAqua(' or '))
            .append(Text.aqua('Deepslate').bold())
            .append(Text.darkAqua('.')));
        tooltip.insert(2, Text.darkPurple('You need at least a ')
            .append(Text.lightPurple('Netherite Mesh').bold())
            .append(Text.darkPurple(' for gravel, but only an '))
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple(' for deepslate.')));
    });

    event.modify('minecraft:amethyst_shard', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:amethyst_shard', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Deepslate').bold()));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple('.')));
    });
    ['kubejs:raw_lead', 'kubejs:raw_silver', 'kubejs:raw_osmium'].forEach(item => {
        event.modify(item, { shift: false }, tooltip => {
            tooltip.insert(1, SHIFT_HINT);
        });
        event.modify(item, { shift: true }, tooltip => {
            tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
                .append(Text.aqua('Deepslate').bold()));
            tooltip.insert(2, Text.darkPurple('You need at least an ')
                .append(Text.lightPurple('Iron Mesh').bold())
                .append(Text.darkPurple('.')));
        });
    });

    // Helper for Deepslate Brass Mesh Metals (Nickel, Uranium)
    ['kubejs:raw_nickel', 'kubejs:raw_uranium'].forEach(item => {
        event.modify(item, { shift: false }, tooltip => {
            tooltip.insert(1, SHIFT_HINT);
        });
        event.modify(item, { shift: true }, tooltip => {
            tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
                .append(Text.aqua('Deepslate').bold()));
            tooltip.insert(2, Text.darkPurple('You need at least a ')
                .append(Text.lightPurple('Brass Mesh').bold())
                .append(Text.darkPurple('.')));
        });
    });

    // Helper for Gravel Brass Mesh Gems (Apatite, Cinnabar, Niter)
    ['kubejs:apatite_gem', 'kubejs:cinnabar_gem', 'kubejs:niter_gem'].forEach(item => {
        event.modify(item, { shift: false }, tooltip => {
            tooltip.insert(1, SHIFT_HINT);
        });
        event.modify(item, { shift: true }, tooltip => {
            tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
                .append(Text.aqua('Gravel').bold()));
            tooltip.insert(2, Text.darkPurple('You need at least a ')
                .append(Text.lightPurple('Brass Mesh').bold())
                .append(Text.darkPurple('.')));
        });
    });
    
    event.modify('minecraft:netherite_scrap', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:netherite_scrap', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.red('Crushed Netherrack').bold()));
        tooltip.insert(2, Text.darkPurple('You need at least a ')
            .append(Text.lightPurple('Brass Mesh').bold())
            .append(Text.darkPurple('.')));
    });

    event.modify('kubejs:sulfur_gem', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('kubejs:sulfur_gem', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.red('Crushed Netherrack').bold()));
        tooltip.insert(2, Text.darkPurple('You need at least an ')
            .append(Text.lightPurple('Iron Mesh').bold())
            .append(Text.darkPurple('.')));
    });

    event.modify('minecraft:diamond', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('minecraft:diamond', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Deepslate').bold()));
        tooltip.insert(2, Text.darkPurple('You need at least a ')
            .append(Text.lightPurple('Brass Mesh').bold())
            .append(Text.darkPurple('.')));
        tooltip.insert(3, Text.darkGreen('Also obtained from ')
            .append(Text.green('Loot Crates').bold())
            .append(Text.darkGreen('.')));
    });

    event.modify('mysticalagriculture:prosperity_shard', { shift: false }, tooltip => {
        tooltip.insert(1, SHIFT_HINT);
    });
    event.modify('mysticalagriculture:prosperity_shard', { shift: true }, tooltip => {
        tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
            .append(Text.aqua('Deepslate').bold()));
        tooltip.insert(2, Text.darkPurple('You need at least a ')
            .append(Text.lightPurple('Brass Mesh').bold())
            .append(Text.darkPurple('.')));
    });

    ['kubejs:peridot_gem', 'kubejs:ruby_gem', 'kubejs:sapphire_gem'].forEach(gem => {
        event.modify(gem, { shift: false }, tooltip => {
            tooltip.insert(1, SHIFT_HINT);
        });
        event.modify(gem, { shift: true }, tooltip => {
            tooltip.insert(1, Text.darkAqua('Obtained by sifting ')
                .append(Text.aqua('Deepslate').bold())
                .append(Text.darkAqua('.')));
            tooltip.insert(2, Text.darkPurple('You need a ')
                .append(Text.lightPurple('Netherite Mesh').bold())
                .append(Text.darkPurple(' to find these rare gems.')));
        });
    });

    [
        'minecraft:netherite_upgrade_smithing_template', 
        'minecraft:sentry_armor_trim_smithing_template', 
        'minecraft:vex_armor_trim_smithing_template', 
        'minecraft:wild_armor_trim_smithing_template', 
        'minecraft:coast_armor_trim_smithing_template', 
        'minecraft:dune_armor_trim_smithing_template', 
        'minecraft:ward_armor_trim_smithing_template', 
        'minecraft:ward_armor_trim_smithing_template', 
        'minecraft:silence_armor_trim_smithing_template', 
        'minecraft:snout_armor_trim_smithing_template', 
        'minecraft:rib_armor_trim_smithing_template', 
        'minecraft:eye_armor_trim_smithing_template', 
        'minecraft:spire_armor_trim_smithing_template'
    ].forEach(t => {
        event.modify(t, { shift: false }, tooltip => {
            tooltip.insert(1, SHIFT_HINT);
        });
        event.modify(t, { shift: true }, tooltip => {
            tooltip.insert(1, Text.darkGreen('Obtained from ')
                .append(Text.green('Loot Crates').bold())
                .append(Text.darkGreen('.')));
        });
    });
});
