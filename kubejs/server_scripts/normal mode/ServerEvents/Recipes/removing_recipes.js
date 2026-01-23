ServerEvents.recipes(event => {
    event.remove({ type: 'createsifter:sifting' });
    const materials = ['copper', 'electrum', 'aluminum', 'steel', 'lead'];
    materials.forEach(material => {
        event.remove({ id: `immersiveengineering:metalpress/wire_${material}` });
    });
    event.remove({ output: 'farmersdelight:wheat_dough' });
    event.remove({ output: 'pamhc2foodcore:doughitem' });
    global.nests.forEach(n => {
		event.remove({ output: `productivebees:${n}_nest` });
	});
    event.remove({ output: 'productivebees:bamboo_hive'});
    event.remove({ type: 'productivebees:bee_fishing' });
    event.remove({ id: 'productivebees:centrifuge/honeycomb_experience_fluid' });
    const pressingPattern = new RegExp(`^(create|createaddition):pressing/(${global.plates.join('|')})_ingot$`);
    event.remove({ id: pressingPattern });
    event.remove({ id: 'create:crafting/materials/brass_ingot_from_decompacting'});
    event.remove({ id: 'create:crafting/materials/brass_ingot_from_compacting'});
    event.remove({ id: 'create:crafting/materials/zinc_ingot_from_decompacting'});
    event.remove({ id: 'create:crafting/materials/zinc_ingot_from_compacting'});
    event.remove({ id: 'createaddition:crafting/electrum_ingot_from_electrum_block'});
    event.remove({ id: 'createaddition:crafting/electrum_ingot_from_nugget'});
    event.remove({ id: 'createsifter:crafting/sturdy_mesh'});
    event.remove({ id: 'createsifter:crafting/advanced_sturdy_mesh'});
    global.raw_ores.forEach(i => {
        event.remove({ id: `createsifter:shapeless/raw_${i}_piece`});
    });
});