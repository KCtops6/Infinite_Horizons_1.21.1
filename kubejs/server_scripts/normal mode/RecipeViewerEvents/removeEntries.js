RecipeViewerEvents.removeEntries('item', event => {
	event.remove('kubejs:incomplete_nether_totem')
	global.nests.forEach(n => {
		event.remove(`productivebees:${n}_nest`)
	})
	event.remove('productivebees:bamboo_hive')
})