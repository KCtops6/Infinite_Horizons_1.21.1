let animals = ['chicken', 'cow', 'pig', 'sheep', 'horse', 'rabbit']
ServerEvents.tags('item', event => {
    animals.forEach(a => {
        event.add('infinitehorizons:feeds', `kubejs:${a}_feed`)
    })
})