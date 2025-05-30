//ignored: false
const stones = [
    'tuff', 'deepslate', 'diorite', 'granite', 'andesite'
];
ServerEvents.recipes(event => {
    stones.forEach(s => {
        event.custom({
            type: "create:milling",
            ingredients: [
                {
                    item: `minecraft:${s}`
                }
            ],
            processing_time: 250,
            results: [
                {
                    id: `kubejs:${s}_gravel`
                }
            ]
        })
    })
})