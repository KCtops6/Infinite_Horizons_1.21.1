ServerEvents.recipes(event => {
    Object.entries(global.pams_grinding_recipes).forEach(([input, output]) => {
        event.custom({
            type: "create:crushing",
            ingredients: [{ item: input }],
            processing_time: 125,
            results: [{ id: output, count: 3 }]
        }).id(`kubejs:crushing/${output.split(':')[1]}_from_${input.split(':')[1]}`);
    });
    Object.entries(global.pams_grinding_recipes_tag_input).forEach(([input, output]) => {
        let count = output.includes('raw') ? 2 : 1; 
        event.custom({
            type: "create:crushing",
            ingredients: [{ tag: input }],
            processing_time: 125,
            results: [{ id: output, count: count * 3}]
        }).id(`kubejs:crushing/${output.split(':')[1]}_from_tag_${input.replace(':', '_')}`);
    });
});