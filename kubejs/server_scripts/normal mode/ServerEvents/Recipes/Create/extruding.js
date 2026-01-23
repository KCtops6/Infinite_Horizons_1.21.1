let recipes = [
    /* Cobblestone */ {
        result: 'minecraft:cobblestone',
        advanced: false,
        input1: 'minecraft:water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 8.0
        }],
        catalyst: null,
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }, /* Andesite */ {
        result: 'minecraft:andesite',
        advanced: false,
        input1: 'minecraft:water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 16.0
        }],
        catalyst: 'minecraft:andesite',
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }, /* Diorite */ {
        result: 'minecraft:diorite',
        advanced: false,
        input1: 'minecraft:water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 16.0
        }],
        catalyst: 'minecraft:diorite',
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }, /* Granite */ {
        result: 'minecraft:granite',
        advanced: false,
        input1: 'minecraft:water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 16.0
        }],
        catalyst: 'minecraft:granite',
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }, /* Basalt */ {
        result: 'minecraft:basalt',
        advanced: false,
        input1: 'minecraft:blue_ice',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 32.0
        }],
        catalyst: 'minecraft:basalt',
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }, /* Obsidian (Basic) */ {
        result: 'minecraft:obsidian',
        advanced: false,
        input1: 'water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 64.0
        }],
        catalyst: 'minecraft:obsidian',
        consumeFirstBlock: false,
        consumeSecondBlock: true
    }, /* Obsidian (Advanced) */ {
        result: 'minecraft:obsidian',
        advanced: true,
        input1: 'minecraft:water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 128.0
        }],
        catalyst: 'minecraft:obsidian',
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }, /* Stone */ {
        result: 'minecraft:stone',
        advanced: false,
        input1: 'minecraft:water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 8.0
        }],
        catalyst: null,
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }, /* Deepslate */ {
        result: 'minecraft:deepslate',
        advanced: false,
        input1: 'minecraft:water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 16.0
        }],
        catalyst: 'minecraft:deepslate',
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }, /* Netherrack */ {
        result: 'minecraft:netherrack',
        advanced: false,
        input1: 'minecraft:water',
        input2: 'minecraft:lava',
        requirements: [{
            "type": "mechanicals:min_speed",
            "value": 32.0
        }],
        catalyst: 'minecraft:netherrack',
        consumeFirstBlock: false,
        consumeSecondBlock: false
    }
]
ServerEvents.recipes(event => {
    event.remove({ type: 'create_mechanical_extruder:extruding' })
    recipes.forEach(r => {
        event.custom({
            "type": "create_mechanical_extruder:extruding",
            "blockIngredients": {
                "first": { "blocks": r.input1 },
                "second": { "blocks": r.input2 }
            },
            "requirements": r.requirements,
            "catalyst": { "blocks": r.catalyst },
            "consumeBlocks": {
                "first": r.consumeFirstBlock,
                "second": r.consumeSecondBlock
            },
            "result": { "id": r.result }
        }).id('kubejs:extruding/' + r.result.replace(':', '_') + (r.advanced ? '_advanced' : ''))
    })
})