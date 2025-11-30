ServerEvents.recipes(event => {
    
    console.log('--- START KUBEJS BIOFUEL CRUSHING RECIPES ---')

    let biofuel_crushing_recipe_inputs = [
        // ... (Your existing item list)
        { 'apple': [1, 2] },
        { 'bamboo': [1, 2] },
        { 'baked_potato': [1, 2] },
        { 'big_dripleaf': [1, 2] },
        { 'bread': [1, 4] },
        { 'cake': [1, 1] },
        { 'carved_pumpkin': [1, 2] },
        { 'crimson_roots': [1, 1] },
        { 'cookie': [4, 3] },
        { 'dried_kelp': [1, 1] },
        { 'fern': [1, 2] },
        { 'glow_lichen': [1, 2] },
        { 'hanging_roots': [1, 1] },
        { 'kelp': [1, 2] },
        { 'large_fern': [1, 3] },
        { 'lily_pad': [1, 1] },
        { 'mangrove_roots': [1, 1] },
        { 'melon': [1, 6] },
        { 'melon_slice': [1, 1] },
        { 'moss_block': [1, 2] },
        { 'moss_carpet': [3, 4] },
        { 'nether_sprouts': [1, 1] },
        { 'pink_petals': [1, 1] },
        { 'pitcher_pod': [1, 1] },
        { 'poisonous_potato': [1, 2] },
        { 'pumpkin': [1, 6] },
        { 'pumpkin_pie': [1, 7] },
        { 'rotten_flesh': [1, 1] },
        { 'sea_pickle': [1, 1] },
        { 'seagrass': [1, 2] },
        { 'short_grass': [1, 1] },
        { 'shroomlight': [1, 4] },
        { 'small_dripleaf': [1, 1] },
        { 'spore_blossom': [1, 2] },
        { 'sugar_cane': [1, 1] },
        { 'tall_grass': [1, 2] },
        { 'warped_roots': [1, 1] },
        { 'warped_wart_block': [1, 4] },
    ]
    const biofuel_crushing_tag_inputs = [
        // Using 'c:' (common) instead of 'forge:' as per your code
        { '#c:berries': [3, 4] }, 
        { '#minecraft:saplings': [1, 1] },
        { '#c:mushroom_blocks': [1, 2] },
        { '#c:vines': [3, 2] },
        { '#c:seeds': [2, 1] }, 
        { '#minecraft:small_flowers': [1, 1] },
        { '#minecraft:mushrooms': [1, 1] },
        { '#minecraft:tall_flowers': [1, 2] },
        { '#minecraft:leaves': [3, 1] },
    ]
    const all_biofuel_inputs = biofuel_crushing_recipe_inputs.concat(biofuel_crushing_tag_inputs);
    
    all_biofuel_inputs.forEach(input => {
        const item_or_tag = Object.keys(input)[0];
        const input_count = input[item_or_tag][0];
        const output_count = input[item_or_tag][1];
        
        let input_object;
        let recipe_id_suffix;

        if (item_or_tag.startsWith('#')) {
            // LOGGING FOR TAGS
            console.log(`Processing Tag: ${item_or_tag}. Input: ${input_count}, Output: ${output_count}`);

            // For Mekanism crushing recipes, tags often must use the 'tag' key directly
            // and the 'type' is not always necessary/correct depending on the Mekanism version.
            // However, the JSON input structure for tags is usually simpler than what KubeJS
            // auto-converts to. Let's try the simplest form:
            
            input_object = {
                tag: item_or_tag.substring(1), // Remove the '#'
                count: input_count
            };

            // Remove the ':' and '/' from the tag name for a clean ID
            recipe_id_suffix = item_or_tag.substring(1).replace(/[:/]/g, '_'); 
            
            // LOGGING THE GENERATED INPUT OBJECT
            console.log(`Generated Tag Input Object: ${JSON.stringify(input_object)}`);

        } else {
            // It's a single item
            input_object = {
                item: `minecraft:${item_or_tag}`,
                count: input_count
            };
            recipe_id_suffix = item_or_tag;
            
            // event.remove({ id: `mekanism:crushing/biofuel/${item_or_tag}` }); // This might be for a vanilla/unmodified recipe set
        }
        
        const final_id = `kubejs:biofuel_crushing/${recipe_id_suffix}`;

        event.custom({
            type: "mekanism:crushing",
            input: input_object,
            output: {
                count: output_count,
                id: "kubejs:bio_matter"
            }
        }).id(final_id);
        
        // LOGGING THE FINAL ID FOR DEBUGGING
        console.log(`Recipe ID Created: ${final_id}`);
    })
    
    console.log('--- END KUBEJS BIOFUEL CRUSHING RECIPES ---')
})