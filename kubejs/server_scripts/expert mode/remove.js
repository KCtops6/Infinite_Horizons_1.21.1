//packmode: expert
let materials = [
    'iron', 'zinc', 'silver', 'nickel', 'gold', 'copper', 'aluminum', 'uranium',
    'steel', 'electrum', 'tin', 'lead', 'constantan', 'osmium'
]
ServerEvents.recipes(event => {
    materials.forEach(m => {
        event.remove( { id: `immersiveengineering:crafting/plate_${m}_hammering` } )
        event.remove( { id: `immersiveengineering:crafting/raw_hammercrushing_${m}` } )
    })
})