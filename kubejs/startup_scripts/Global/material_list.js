global.ingots = [
    'aluminum', 'brass', 'bronze',
    'constantan', 'electrum', 'enderium',
    'infinitium', 'invar', 'lead',
    'lumium', 'nickel',
    'osmium', 'signalum', 'silver',
    'steel',
    'tin', 'uranium', 'zinc'
];
global.dusts = [
    'aluminum', 'brass',
    'bronze',
    'constantan', 'copper',
    'diamond', 'electrum',
    'enderium', 'gold', 'invar',
    'iron', 'lead',
    'lumium', 'netherite', 'nickel', 'niter',
    'osmium', 'signalum', 'sulfur',
    'silver', 'steel', 'tin',
    'uranium', 'zinc'
];
global.plates = [
    'aluminum', 'brass', 'bronze',
    'constantan', 'copper', 'electrum',
    'enderium', 'gold', 'infinitium',
    'invar', 'iron', 'lead',
    'lumium', 'netherite',
    'nickel', 'signalum', 'silver', 'steel', 'tin', 'uranium', 'zinc'
];
global.gems = [
    'apatite', 'cinnabar', 'niter', 'peridot', 'ruby', 'sapphire', 'sulfur'
];
global.gears = [
    'bronze', 'constantan', 'copper', 'diamond', 'electrum', 'enderium', 'gold', 'invar',
    'iron', 'lead', 'lumium', 'netherite', 'nickel', 'signalum', 'silver', 'tin'
];
global.nuggets = [
    'aluminum', 'brass', 'bronze', 'constantan',
    'copper', 'electrum', 'enderium', 
    'invar', 'lead', 'lumium', 
    'netherite', 'nickel', 'osmium',
    'signalum', 'silver', 'steel',
    'tin', 'uranium', 'zinc'
];
global.raw_ores = [
    'aluminum', 'lead', 'nickel', 'osmium', 'silver',
    'tin', 'uranium'
];
global.blocks = [
    'aluminum', 'apatite', 'brass',
    'bronze', 'cinnabar', 'constantan',
    'copper', 'electrum', 'enderium',
    'gold', 'infinitium', 'invar',
    'iron', 'lead', 'lumium', 'nickel', 'niter',
    'osmium', 'peridot', 'ruby', 'sapphire',
    'signalum', 'silver', 'steel',
    'sulfur', 'tin',
    'uranium', 'zinc'
];
global.raw_ore_blocks = [
    'aluminum', 'lead', 'silver', 'nickel', 'uranium'
];
global.stones = [
    'tuff', 'deepslate', 'diorite', 'granite', 'andesite'
];
global.nests = [
    'oak_wood', 'spruce_wood', 'birch_wood', 'dark_oak_wood', 'jungle_wood', 'acacia_wood',
    'cherry_wood', 'mangrove_wood', 'stone', 'coarse_dirt', 'sand', 'snow',
    'gravel', 'sugar_cane', 'slimy', 'glowstone', 'soul_sand', 'nether_quartz', 'nether_gold',
    'nether_brick', 'end_stone', 'obsidian', 'bumble_bee', 'sugarbag', 'warped_bee', 'crimson_bee'
]
if (Platform.isLoaded('refinedstorage')) global.dusts.push(
    'nether_quartz', 'quartz_enriched_iron', 'quartz_enriched_copper');
if (Platform.isLoaded('botania')) {
    global.blocks.push(
        'elementium', 'manasteel', 'terrasteel');
    global.dusts.push(
        'elementium', 'manasteel', 'terrasteel');
    global.ingots.push(
        'elementium', 'manasteel', 'terrasteel');
}