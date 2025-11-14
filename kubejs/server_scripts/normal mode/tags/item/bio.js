ServerEvents.tags('item', event => {
    event.add('c:fuels/bio', 'kubejs:bio_matter');
    let other_bio_fuels = [ 'createaddition:biomass', 'mekanism:bio_fuel']
    other_bio_fuels.forEach(fuel => {
        event.remove('c:fuels/bio', fuel)
    })
})