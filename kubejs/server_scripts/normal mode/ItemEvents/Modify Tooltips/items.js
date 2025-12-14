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
    "mysticalagriculture:prosperity_shard": "Obtained by sifting deepslate",
    "mysticalagriculture:prosperity_gemstone": "Important crafting component"
};
const MULTI_LINE_TOOLTIPS = {
    "minecraft:coal": [
        "Obtained by sifting Gravel.",
        "Appears in Copper, Iron, Brass, and Netherite Tier Meshes.",
        "Best chance with Iron Mesh."
    ],
    "minecraft:raw_iron": [
        "Obtained by sifting Gravel.",
        "Appears in Copper, Iron, Brass, and Netherite Tier Meshes.",
        "Best chance with Brass Mesh."
    ],
    "minecraft:raw_copper": [
        "Obtained by sifting Gravel.",
        "Appears in Copper, Iron, Brass, and Netherite Tier Meshes.",
        "Best chance with Iron Mesh."
    ],
    "create:raw_zinc": [
        "Obtained by sifting Gravel.",
        "Appears in Copper, Iron, Brass, and Netherite Tier Meshes.",
        "Best chance with Netherite Mesh."
    ],
    "kubejs:raw_tin": [
        "Obtained by sifting Gravel.",
        "Appears in Iron, Brass, and Netherite Tier Meshes.",
        "Best chance with Netherite Mesh."
    ]
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
    Object.entries(MULTI_LINE_TOOLTIPS).forEach(([itemId, lines]) => {
        addShiftTooltip(event, itemId, lines);
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
});
