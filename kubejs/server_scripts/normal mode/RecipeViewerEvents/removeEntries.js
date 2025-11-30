RecipeViewerEvents.removeEntries('item', event => {
    event.remove('kubejs:incomplete_nether_totem')
    global.nests.forEach(n => {
        event.remove(`productivebees:${n}_nest`)
    })
    event.remove('productivebees:bamboo_hive')
    let extraRemovals = [
        'createsifter:andesite_pebble', 'createsifter:basalt_pebble',
        'createsifter:blackstone_pebble', 'createsifter:calcite_pebble',
        'createsifter:deepslate_pebble', 'createsifter:diorite_pebble',
        'createsifter:granite_pebble', 'createsifter:stone_pebble',
        'createsifter:tuff_pebble', 'createsifter:raw_uranium_piece',
        'createsifter:raw_nickel_piece', 'createsifter:raw_aluminum_piece',
        'createsifter:raw_lead_piece', 'createsifter:raw_tin_piece',
        'createsifter:raw_silver_piece', 'createsifter:raw_osmium_piece',
        'createsifter:raw_zinc_piece', 'createsifter:raw_iron_piece',
        'createsifter:raw_gold_piece', 'createsifter:raw_copper_piece',
		'createsifter:andesite_mesh', 'createsifter:zinc_mesh', 'createsifter:sturdy_mesh', 
		'createsifter:custom_mesh', 'createsifter:advanced_brass_mesh', 
		'createsifter:advanced_sturdy_mesh', 'createsifter:advanced_custom_mesh'
	]
    extraRemovals.forEach(id => event.remove(id))
})
