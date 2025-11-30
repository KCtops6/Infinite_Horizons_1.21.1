/**
 * KubeJS script to replace specific inputs in crafting recipes
 * to improve resource availability and recipe consistency.
 */
ServerEvents.recipes(event => {
    /**
     * Replace lava bucket with flint in Mystical Agriculture's fire agglomeratio recipen
     * Flint is more abundant and easier to obtain than lava buckets
     * which require a bucket and a source of lava.
     */
    event.replaceInput( // Replace input in recipes
        { output: 'mysticalagriculture:fire_agglomeratio' },    // any recipe that outputs fire agglomeratio
        'minecraft:lava_bucket',    // specifically replace lava bucket
        'minecraft:flint'   // force it to use flint instead
    )

    /**
     * Replace other mod doughs with Create's dough
     * Create's dough is used in more recipes and is more versatile
     * than the other mod doughs.
     */
    let otherDoughs = [ // List of other mod doughs to replace
        'farmersdelight:wheat_dough',   // Farmer's Delight wheat dough
        'pamhc2foodcore:doughitem'  // Pam's HarvestCraft dough item
    ];
    otherDoughs.forEach(dough => {  // For each dough in the list
        event.replaceInput( // Replace input in recipes
            { input: dough },  // any recipe that uses this dough
            dough,             // specifically replace this one
            'create:dough'     // force it to use create:dough
        );
    });

    /**
     * Replace Pam's HarvestCraft flour with Create's wheat flour
     * Create's wheat flour is used in more recipes and is more versatile
     * than Pam's HarvestCraft flour.
     */
    event.replaceInput( // Replace input in recipes
        { input: 'pamhc2foodcore:flouritem' },  // any recipe that uses Pam's HarvestCraft flour
         'pamhc2foodcore:flouritem',    // specifically replace this one
         'create:wheat_flour'   // force it to use Create's wheat flour
    ); // Replace Pam's HarvestCraft flour with Create's wheat flour
    let other_bio_fuels = [ 'createaddition:biomass', 'mekanism:bio_fuel']
    other_bio_fuels.forEach(f => {
        event.replaceInput( { input: f }, f, 'kubejs:bio_matter')
    })
})