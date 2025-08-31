ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'mysticalagriculture:fire_agglomeratio' },
        'minecraft:lava_bucket',
        'minecraft:flint'
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

    
})