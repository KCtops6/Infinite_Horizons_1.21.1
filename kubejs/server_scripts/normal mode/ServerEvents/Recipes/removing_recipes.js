ServerEvents.recipes(event => {
    event.remove({ type: 'createsifter:sifting' })  // remove all sifting recipes.
    const materials = ['copper', 'electrum', 'aluminum', 'steel', 'lead']   // immersive engineering wire materials.
    materials.forEach(material => {
        event.remove({ id: `immersiveengineering:metalpress/wire_${material}` })    // remove each matalpress recipe for that wire.
    })

    /**
     * Remove other mod doughs with Create's dough
     * Create's dough is used in more recipes and is more versatile
     * than the other mod doughs.
     */
    event.remove({ output: 'farmersdelight:wheat_dough' }); // Remove Farmer's Delight wheat dough
    event.remove({ output: 'pamhc2foodcore:doughitem' });   // Remove Pam's HarvestCraft dough item
    global.nests.forEach(n => {
		event.remove({ output: `productivebees:${n}_nest` })
	})
    event.remove({ output: 'productivebees:bamboo_hive'});
    event.remove({ type: 'productivebees:bee_fishing' });
    // removing default productive bees experience comb centrifuge recipe.
    event.remove({ id: 'productivebees:centrifuge/honeycomb_experience_fluid' });
})