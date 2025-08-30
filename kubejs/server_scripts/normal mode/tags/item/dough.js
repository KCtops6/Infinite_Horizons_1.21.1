// Custom tag for all dough items
ServerEvents.tags('item', event => {    // Creating a new tag 'infinitehorizons:doughs'
    event.add('infinitehorizons:doughs', [  // Adding items to the tag
        'create:dough', // Create mod dough
        'farmersdelight:wheat_dough',   // Farmer's Delight wheat dough
        'pamhc2foodcore:doughitem', // Pam's HarvestCraft dough item
    ]);
});